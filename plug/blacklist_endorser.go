package main

import (
	"github.com/hyperledger/burrow/crypto"
	"github.com/hyperledger/burrow/txs"
)

type endorsement string

var blacklist = []crypto.Address{
	crypto.MustAddressFromHexString("C3F7DE4F75D7678FBBCB32E7C8CDAF82E83E0EDA"),
	crypto.MustAddressFromHexString("DEADBEEF12345689DEADBEEF123456789DEADBEE"),
}

func (g endorsement) Endorse(e *txs.Envelope) (bool, error) {
	for _, in := range (*e).Tx.Payload.GetInputs() {
		for _, a := range blacklist {
			if in.Address == a {
				return false, nil
			}
		}
	}
	return true, nil
}

var Endorser endorsement
