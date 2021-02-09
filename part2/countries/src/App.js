import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Content from './components/Content';

function App() {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleInput = e => {
    setResult(
      countries.filter(country =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search handleInput={handleInput} />
      <Content result={result} />
    </div>
  );
}

export default App;
