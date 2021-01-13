import React from 'react';

const Persons = ({ search, persons }) => {
  return search === ''
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
        ));
};

export default Persons;
