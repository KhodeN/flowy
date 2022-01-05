package main

import (
	"flowy/flowy"
	"github.com/dgraph-io/badger/v3"
	"log"
)

func main() {
	storage := flowy.NewStorage("./storage.db")
	defer func(Db *badger.DB) {
		err := Db.Close()
		if err != nil {
			log.Fatal(err)
		}
	}(storage.Db)

	app := &flowy.Application{
		Storage: storage,
	}

	err := app.Run()
	if err != nil {
		log.Fatal(err)
	}
}
