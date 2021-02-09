import { useState } from 'react';
import Country from './Country';

const ListItem = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li key={country.name}>
      {country.name}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide' : 'show'}
      </button>
      {showDetails && <Country country={country} />}
    </li>
  );
};

export default ListItem;
