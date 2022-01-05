package flowy

import (
	"log"
	"sync"
)
import "github.com/robfig/cron/v3"

type Application struct {
	storage   *Storage
	tickCount int64
}

func NewApplication(storage *Storage) *Application {
	return &Application{storage: storage, tickCount: 0}
}

func (a *Application) Run() error {
	// Sync on launch
	a.sync()

	err := a.schedule()
	if err != nil {
		return err
	}

	return nil
}

func (a *Application) Close() error {
	return a.storage.Close()
}

func (a *Application) schedule() error {
	c := cron.New()

	_, err := c.AddFunc("@every 1s", a.tick)
	if err != nil {
		return err
	}

	// TODO do configurable
	_, err = c.AddFunc("@every 1m", a.sync)
	if err != nil {
		return err
	}

	c.Start()

	// forever https://pliutau.com/different-ways-to-block-go-runtime-forever/
	// TODO replace by http server
	var wg sync.WaitGroup
	wg.Add(1)
	wg.Wait()

	return nil
}

func (a *Application) tick() {
	a.tickCount += 1
	log.Println("Tick", a.tickCount)
}

func (a *Application) sync() {
	log.Println("sync")
}
