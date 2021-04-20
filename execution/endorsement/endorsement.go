package endorsement

import (
	"fmt"
	"plugin"

	"github.com/hyperledger/burrow/txs"
)

type EndorserPlugin struct {
	Name    string
	Library string
}

type Endorser interface {
	Endorse(tx *txs.Tx) error
}

func LoadEndorser(ep *EndorserPlugin) (Endorser, error) {
	plug, err := plugin.Open(ep.Library)
	if err != nil {
		return nil, fmt.Errorf("Could not load endorser plugin from %s", ep.Library)
	}

	sym, err := plug.Lookup("Endorser")
	if err != nil {
		return nil, fmt.Errorf("Failed to find endorser in plugin %s", ep.Library)
	}

	var endorser Endorser
	endorser, ok := sym.(Endorser)
	if !ok {
		return nil, fmt.Errorf("Unexpected symbol type in endorser plugin %s", ep.Library)
	}

	return endorser, nil
}
