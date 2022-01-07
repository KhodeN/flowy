package flowy

import (
	"log"
)
import "github.com/robfig/cron/v3"

type Application struct {
	api       *Api
	storage   *Storage
	tickCount int64
}

func NewApplication(storage *Storage) *Application {
	api := NewApi(storage)

	return &Application{api: api, storage: storage, tickCount: 0}
}

func (a *Application) Run() error {
	// Sync on launch
	a.sync()

	err := a.schedule()
	if err != nil {
		return err
	}

	a.api.Listen()

	return nil
}

func (a *Application) Close() error {
	return a.storage.Close()
}

func (a *Application) schedule() error {
	c := cron.New()

	_, err := c.AddFunc("@every 1m", a.tick)
	if err != nil {
		return err
	}

	// TODO do configurable
	_, err = c.AddFunc("@every 1h", a.sync)
	if err != nil {
		return err
	}

	c.Start()

	return nil
}

func (a *Application) tick() {
	a.tickCount += 1
	log.Println("Tick", a.tickCount)
}

func (a *Application) sync() {
	log.Println("sync")
}
