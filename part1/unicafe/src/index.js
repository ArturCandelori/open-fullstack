import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>
          good {good} <br />
          neutral {neutral} <br />
          bad {bad} <br />
          all {all} <br />
          average 0 <br />
          positive 0 %
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>
          good {good} <br />
          neutral {neutral} <br />
          bad {bad} <br />
          all {all} <br />
          average {(good - bad) / all} <br />
          positive {(good / all) * 100} %
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
