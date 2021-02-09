import React from 'react';

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
  return parts.map(part => <Part key={part.name} part={part} />);
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return <h2>total of {total} exercises</h2>;
};

export default Course;
