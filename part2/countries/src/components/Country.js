const Country = ({ country }) => {
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
    </div>
  );
};

export default Country;
