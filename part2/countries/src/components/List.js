import ListItem from './ListItem';

const List = ({ result }) => {
  return (
    <ul>
      {result.map(country => (
        <ListItem country={country} />
      ))}
    </ul>
  );
};

export default List;
