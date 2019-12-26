import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { determineHeadingText } from "../utils";
import { connect } from "react-redux";
import { setQuery } from "../actions/";
import Search from "./Search";
const Header = ({ setQuery }) => {
  const history = useHistory();
  const { pathname } = useLocation(); // get location from uselocation todo
  const [search, setSearch] = useState("");
  const handleQueryChange = e => {
    setSearch(e.target.value);
    setQuery(e.target.value);
    if (pathname !== "/contacts/search") {
      history.push("/contacts/search");
    }
  };

  return (
    <>
      <div>
        <h1>{determineHeadingText(pathname)}</h1>
        <hr />
        <Link
          className="btn btn-primary"
          to="/contacts"
          style={{ marginRight: "5px" }}
        >
          Contact list
        </Link>
        <Link className="btn btn-danger" to="/contacts/new">
          New contact
        </Link>
        <hr />
      </div>
      <Search onChange={handleQueryChange} query={search} />
    </>
  );
};

export default connect(null, {
  setQuery
})(Header);
