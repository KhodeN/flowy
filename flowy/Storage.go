package flowy

import (
	"github.com/dgraph-io/badger/v3"
)

const nameKey = "name"

type Storage struct {
	db *badger.DB
}

func NewStorage(dbFilePath string) (*Storage, error) {
	// Open the Badger database located in the dbFilePath directory.
	// It will be created if it doesn't exist.
	options := badger.DefaultOptions(dbFilePath).WithLoggingLevel(badger.WARNING)
	db, err := badger.Open(options)
	if err != nil {
		return nil, err
	}

	return &Storage{db: db}, nil
}

func (s *Storage) Close() error {
	return s.db.Close()
}

func (s *Storage) SetName(name string) error {
	return s.setString(nameKey, name)
}

func (s *Storage) GetName() (string, error) {
	return s.getString(nameKey)
}

func (s *Storage) setString(key, value string) error {
	return s.db.Update(func(txn *badger.Txn) error {
		return txn.Set([]byte(key), []byte(value))
	})
}

func (s *Storage) getString(key string) (string, error) {
	var valCopy []byte
	err := s.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get([]byte(key))
		if err != nil {
			return err
		}
		valCopy, err = item.ValueCopy(nil)
		return err
	})

	return string(valCopy), err
}
