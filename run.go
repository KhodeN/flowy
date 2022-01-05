package main

import (
	"log"

	"flowy/flowy"
)

const DbStoragePath = "./storage.db"

func main() {
	storage, err := flowy.NewStorage(DbStoragePath)
	if err != nil {
		log.Fatal(err)
	}

	app := flowy.NewApplication(storage)
	defer func(app *flowy.Application) {
		err := app.Close()
		if err != nil {
			log.Fatal(err)
		}
	}(app)

	err = app.Run()
	if err != nil {
		log.Fatal(err)
	}
}
