import React from "react";
const Search = ({ onChange, query }) => (
  <div>
    <input
      type="text"
      className="form-control"
      onChange={onChange}
      value={query}
      placeholder="Search contacts by name"
    />
    <br />
  </div>
);

export default Search;
