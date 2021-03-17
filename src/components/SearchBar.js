import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onSubmitForm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // Make sure we call callback from parent component
    onSubmitForm(searchTerm);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={onInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
