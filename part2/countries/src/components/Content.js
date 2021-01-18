const Content = ({ result }) => {
  if (result.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (result.length > 1) {
    return (
      <ul>
        {result.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  } else if (result.length === 1) {
    const country = result[0];
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
  } else {
    return null;
  }
};

export default Content;
