import React from 'react';
import './Search.css';
const Search = ({ setFilters }) => {
  const onChangeHandler = (e) =>
    setFilters((currentState) => ({ ...currentState, search: e.target.value }));

  return (
    <div className="search">
      <label className="search__label" htmlFor="search">
        Search a character
      </label>
      <input
        className="search__input"
        onChange={onChangeHandler}
        type="text"
        placeholder="Enter a character"
        name="search"
        id="search"
      />
    </div>
  );
};

export default Search;
