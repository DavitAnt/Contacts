import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  recieveSingleContact,
  editContact,
  deleteContact,
  addContact
} from "../actions/";

const formInitialValues = { name: "", phone: "", email: "" };

const NewContact = ({
  editContact,
  addContact,
  deleteContact,
  recieveSingleContact,
  editMode
}) => {
  const history = useHistory();
  const { contactId } = useParams();
  const [state, setState] = useState(formInitialValues);
  const [formErrors, setFormErrors] = useState(formInitialValues);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (editMode) {
      setState(recieveSingleContact(contactId));
    } else {
      setState(formInitialValues);
    }
  }, [recieveSingleContact, contactId]);

  useEffect(() => {
    checkForErrors();
  }, [state]);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const renderErrors = () => (
    <>
      {Object.keys(formErrors).map((fieldName, index) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <ul key={index} className="list-group">
              <li
                className="list-group-item list-group-item-danger"
                style={{ marginBottom: "3px" }}
              >
                {formErrors[fieldName]}
              </li>
            </ul>
          );
        } else {
          return "";
        }
      })}
    </>
  );

  const checkForErrors = () => {
    let isValid = true;
    const scopedErrors = { name: "", phone: "", email: "" };
    const { name, email, phone } = state;
    if (name.length <= 2 || name.length >= 40) {
      scopedErrors.name = "Name should be between 2 and 40 chars";
      isValid = false;
    }
    if (phone.length !== 9) {
      scopedErrors.phone = "Phone must have 9 digits";
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      scopedErrors.email = "Email must have valid format";
      isValid = false;
    }
    setFormErrors(scopedErrors);
    setIsValid(isValid);
  };

  const saveContact = e => {
    e.preventDefault();
    if (editMode) {
      editContact(state);
    } else {
      addContact(state);
    }
    handleTransition();
  };

  const handleTransition = () => history.push("/contacts");
  const doesInputHaveError = field =>
    `form-control ${field ? "is-invalid" : "is-valid"}`;
  const handleDelete = () => {
    if (editMode) {
      const sure = window.confirm("Do you really want to delete this contact?");
      if (sure) {
        deleteContact(state.id);
        handleTransition();
      }
    } else {
      handleTransition();
    }
  };

  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        padding: "20px",
        borderRadius: "5px"
      }}
    >
      <form onSubmit={saveContact}>
        <div className="form-group">
          <label htmlFor="contact-name">name</label>
          <input
            type="text"
            name="name"
            className={doesInputHaveError(formErrors.name)}
            id="contact-name"
            placeholder="Enter name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">phone</label>
          <input
            type="text"
            name="phone"
            className={doesInputHaveError(formErrors.phone)}
            id="contact-phone"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">email</label>
          <input
            type="email"
            name="email"
            className={doesInputHaveError(formErrors.email)}
            id="contact-email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        {renderErrors()}
        <button type="submit" disabled={!isValid} className="btn btn-success">
          Save
        </button>
        {editMode ? (
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-danger float-right"
          >
            Delete
          </button>
        ) : (
          <Link to="/contacts" className="btn btn-dark float-right">
            Go back to contacts
          </Link>
        )}
      </form>
    </div>
  );
};

export default connect(null, {
  recieveSingleContact,
  addContact,
  editContact,
  deleteContact
})(NewContact);
