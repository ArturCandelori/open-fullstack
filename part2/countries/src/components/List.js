import ListItem from './ListItem';

const List = ({ result }) => {
  return (
    <ul>
      {result.map(country => (
        <ListItem key={country.name} country={country} />
      ))}
    </ul>
  );
};

export default List;
