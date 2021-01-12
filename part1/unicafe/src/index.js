import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, set, state }) => {
  return <button onClick={() => set(state + 1)}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <span>
      {text} {value}
    </span>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>
          <Statistic text='good' value={good} /> <br />
          <Statistic text='neutral' value={neutral} /> <br />
          <Statistic text='bad' value={bad} /> <br />
          <Statistic text='all' value={all} /> <br />
          <Statistic text='average' value={(good - bad) / all} /> <br />
          <Statistic text='positive' value={(good / all) * 100} /> %
        </p>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' set={setGood} state={good} />
      <Button text='neutral' set={setNeutral} state={neutral} />
      <Button text='bad' set={setBad} state={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
