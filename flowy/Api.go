package flowy

import (
	"github.com/ivpusic/golog"
	"github.com/ivpusic/neo"
	"github.com/ivpusic/neo-cors"
)

type Api struct {
	app     *neo.Application
	storage *Storage
}

func NewApi(storage *Storage) *Api {
	app := neo.App()
	app.Use(cors.Init())
	app.Logger.Level = golog.DEBUG
	app.Conf.App.Addr = ":3001"

	api := &Api{app: app, storage: storage}

	app.Get("/", api.rootHandler)
	app.Get("/api", api.apiRootHandler)

	return api
}

func (a *Api) Listen() {
	a.app.Start()
}

func (a *Api) rootHandler(ctx *neo.Ctx) (int, error) {
	return 301, ctx.Res.Redirect("/api")
}

func (a *Api) apiRootHandler(ctx *neo.Ctx) (int, error) {
	return 200, ctx.Res.Json("Hello from API")
}
