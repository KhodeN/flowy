package flowy

import (
	"github.com/dgraph-io/badger/v3"
	"log"
)

const nameKey = "name"

type Storage struct {
	Db *badger.DB
}

func NewStorage(dbFilePath string) *Storage {
	// Open the Badger database located in the /tmp/badger directory.
	// It will be created if it doesn't exist.
	options := badger.DefaultOptions(dbFilePath).WithLoggingLevel(badger.WARNING)
	db, err := badger.Open(options)
	if err != nil {
		log.Fatal(err)
	}

	return &Storage{Db: db}
}

func (s *Storage) SetName(name string) error {
	return s.setString(nameKey, name)
}

func (s Storage) GetName() (string, error) {
	return s.getString(nameKey)
}

func (s *Storage) setString(key, value string) error {
	return s.Db.Update(func(txn *badger.Txn) error {
		return txn.Set([]byte(key), []byte(value))
	})
}

func (s *Storage) getString(key string) (string, error) {
	var valCopy []byte
	err := s.Db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(key))
		if err != nil {
			return err
		}
		valCopy, err = item.ValueCopy(nil)
		return err
	})

	return string(valCopy), err
}
