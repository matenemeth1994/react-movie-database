import React, { useState } from "react";
import styles from "./Search.module.scss"

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className={styles.margin}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Type a movie title here"
      />
      <input className={styles.button} onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
