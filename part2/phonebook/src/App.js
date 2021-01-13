import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = event => {
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
      setPersons(persons.concat({ name: newName }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={event => setNewName(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
