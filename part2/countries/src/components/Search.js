const Search = ({ handleInput }) => {
  return (
    <div>
      find countries <input onChange={handleInput} />
    </div>
  );
};

export default Search;
