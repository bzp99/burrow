package proposals

import (
	"fmt"
	"strings"
	"time"

	"github.com/hyperledger/burrow/deploy/def"
	"github.com/hyperledger/burrow/txs"
	"github.com/hyperledger/burrow/txs/payload"
	log "github.com/sirupsen/logrus"
)

type ProposalState int

const (
	ALL ProposalState = 1 + iota
	FAILED
	EXECUTED
	EXPIRED
	PROPOSED
)

func (p *ProposalState) String() string {
	switch *p {
	case ALL:
		return "ALL"
	case FAILED:
		return "FAILED"
	case EXECUTED:
		return "EXECUTED"
	case EXPIRED:
		return "EXPIRED"
	case PROPOSED:
		return "PROPOSED"
	default:
		panic(fmt.Sprintf("unknown propopsal state %d", *p))
	}
}

func ProposalStateFromString(s string) (ProposalState, error) {
	if strings.EqualFold(s, "all") {
		return ALL, nil
	}
	if strings.EqualFold(s, "failed") {
		return FAILED, nil
	}
	if strings.EqualFold(s, "executed") {
		return EXECUTED, nil
	}
	if strings.EqualFold(s, "expired") {
		return EXPIRED, nil
	}
	if strings.EqualFold(s, "proposed") {
		return PROPOSED, nil
	}

	return ALL, fmt.Errorf("Unknown proposal state %s", s)
}

func ListProposals(args *def.DeployArgs, reqState ProposalState) {
	client := def.NewClient(args.Chain, args.KeysService, args.MempoolSign, time.Duration(args.Timeout)*time.Second)

	props, err := client.ListProposals(reqState == PROPOSED)
	if err != nil {
		log.Warnf("Failed to list proposals: %v", err)
		return
	}

	for i, prop := range props {
		var state string
		switch prop.Ballot.ProposalState {
		case payload.Ballot_FAILED:
			state = "FAILED"
		case payload.Ballot_EXECUTED:
			state = "EXECUTED"
		case payload.Ballot_PROPOSED:
			if ProposalExpired(prop.Ballot.Proposal, client) != nil {
				state = "EXPIRED"
			} else {
				state = "PROPOSED"
			}
		}

		if !strings.EqualFold(state, reqState.String()) && reqState != ALL {
			continue
		}

		log.WithFields(log.Fields{
			"ProposalHash": fmt.Sprintf("%x", prop.Hash),
			"Name":         prop.Ballot.Proposal.Name,
			"Description":  prop.Ballot.Proposal.Description,
			"State":        state,
			"Votes":        len(prop.Ballot.GetVotes()),
		}).Warnf("Proposal %d", i)
	}
}

func ProposalExpired(proposal *payload.Proposal, client *def.Client) error {
	for _, input := range proposal.BatchTx.Inputs {
		acc, err := client.GetAccount(input.Address)
		if err != nil {
			return err
		}

		if input.Sequence != acc.Sequence+1 {
			return fmt.Errorf("Proposal has expired, account %s is out of sequence", input.Address.String())
		}
	}

	for i, step := range proposal.BatchTx.Txs {
		txEnv := txs.EnvelopeFromAny("", step)

		for _, input := range txEnv.Tx.GetInputs() {
			acc, err := client.GetAccount(input.Address)
			if err != nil {
				return err
			}

			if input.Sequence != acc.Sequence+1 {
				return fmt.Errorf("Proposal has expired, account %s at step %d is expired", input.Address.String(), i)
			}
		}
	}

	return nil
}
