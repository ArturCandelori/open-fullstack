import React, { useEffect, useState } from 'react';

import './App.css';

import personService from './services/persons';

import Notification from './components/Notification';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();

    let personToAdd = persons.find(person => person.name === newName);

    if (personToAdd) {
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );

      const updatedPerson = { ...personToAdd, number: newNumber };

      personService
        .update(personToAdd.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(
            persons.map(person =>
              person.id !== personToAdd.id ? person : returnedPerson
            )
          );
        })
        .catch(error => {
          setMessage({
            text: `Information of ${personToAdd.name} has already been removed from server`,
            type: 'error',
          });

          setPersons(persons.filter(p => p.id !== personToAdd.id));

          setTimeout(() => setMessage(null), 5000);
        });
    } else {
      personToAdd = { name: newName, number: newNumber };

      personService.create(personToAdd).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setMessage({ text: `Added ${newName}`, type: 'success' });
        setTimeout(() => setMessage(null), 5000);
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = person => {
    window.confirm(`Delete ${person.name}?`);

    personService.deletePerson(person.id);

    setPersons(persons.filter(p => p.id !== person.id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
