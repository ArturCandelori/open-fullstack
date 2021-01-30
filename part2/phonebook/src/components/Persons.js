import React from 'react';

import Person from './Person';

const Persons = ({ search, persons, deletePerson }) => {
  return search === ''
    ? persons.map(person => (
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      ))
    : persons
        .filter(person => person.name === search)
        .map(person => (
          <Person
            key={person.name}
            person={person}
            deletePerson={deletePerson}
          />
        ));
};

export default Persons;
