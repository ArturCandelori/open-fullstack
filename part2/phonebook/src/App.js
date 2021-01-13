import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();

    let includes = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        includes = true;
        break;
      }
    }

    if (includes) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={search} onChange={handleSearch} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={event => setNewName(event.target.value)}
          />
        </div>
        <div>
          number:{' '}
          <input
            value={newNumber}
            onChange={event => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {search === ''
        ? persons.map(person => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        : persons
            .filter(person => person.name === search)
            .map(person => (
              <p key={person.name}>
                {person.name} {person.number}
              </p>
            ))}
    </div>
  );
};

export default App;
