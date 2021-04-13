import React, { useState } from "react";

const SearchBar = ({ SearchFormSubmit }) => {
  const [term, setTerm] = useState("");

  //we are using an arrow function because were assigning
  //a callback that were going to pass to a child element.
  const onInputChange = (event) => {
    //we update the term in our state by getting the value of the text
    //from the input element by using "event"
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    //preventDefault method prevents the form to submit and refresh the entire page
    event.preventDefault();

    SearchFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
