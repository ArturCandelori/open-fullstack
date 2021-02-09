import { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then(response => {
        setWeather(response.data.current);
        console.log(response.data.current);
      });
  }, []);

  return (
    <div>
      <h1>{country.name}</h1>
      capital {country.capital} <br />
      population {country.population}
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt='flag' width='150' />
      <h2>Weather in {country.capital}</h2>
      {weather && (
        <div>
          <p>
            <strong>temperature:</strong> {weather.temperature} Celsius
          </p>
          {weather.weather_icons.map(icon => (
            <img key={icon} src={icon} alt='weather' />
          ))}
          <p>
            <strong>wind:</strong> {weather.wind_speed} mph direction{' '}
            {weather.wind_dir}
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
