import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { recieveContacts, searchContacts } from "../actions/";
const Contacts = ({
  recieveContacts,
  searchContacts,
  contacts,
  resource,
  query
}) => {
  useEffect(() => {
    if (resource === "search" && query.length > 0) {
      searchContacts(query);
    } else {
      recieveContacts();
    }
  }, [recieveContacts, searchContacts, query]);

  return (
    <div>
      <div className="list-group">
        {contacts &&
          contacts.map(contact => {
            return <Contact contact={contact} key={contact.id} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  query: state.query
});

export default connect(mapStateToProps, {
  recieveContacts,
  searchContacts
})(Contacts);
