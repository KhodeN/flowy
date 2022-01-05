package flowy

import (
	"fmt"
)

type Application struct {
	Storage *Storage
}

func (a *Application) Run() error {
	name, err := a.Storage.GetName()
	if err != nil {
		return err
	}

	fmt.Printf("Hello, %s!", name)
	fmt.Println()

	return nil
}
