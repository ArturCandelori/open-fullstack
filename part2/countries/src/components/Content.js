import Country from './Country';
import List from './List';

const Content = ({ result }) => {
  if (result.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (result.length > 1) {
    return <List result={result} />;
  } else if (result.length === 1) {
    const country = result[0];
    return <Country country={country} />;
  } else {
    return <p>No countries found</p>;
  }
};

export default Content;
