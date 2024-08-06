import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <h2>Search for Movies</h2>
      <input
        type='text'
        placeholder='Choose your movie'
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
