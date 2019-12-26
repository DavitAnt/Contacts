import {
  ADD_CONTACT,
  RECIEVE_CONTACTS,
  RECIEVE_SINGLE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_QUERY
} from "./types";
import {
  addContactToStorage,
  getAllContactsFromStorage,
  getSingleContactFromStorage,
  deleteContactFromStorage,
  editContactInStorage,
  searchContactStorage
} from "../simulateApi";

export const addContact = contactData => dispatch => {
  const data = addContactToStorage(contactData);
  dispatch({ type: ADD_CONTACT, payload: { contact: data } });
};
export const recieveContacts = () => dispatch => {
  const contacts = getAllContactsFromStorage();
  dispatch({ type: RECIEVE_CONTACTS, payload: { contacts } });
};
export const recieveSingleContact = contactId => dispatch => {
  const contact = getSingleContactFromStorage(contactId);
  dispatch({
    type: RECIEVE_SINGLE_CONTACT,
    payload: { selectedContact: contact }
  });
  return contact;
};
export const deleteContact = contactId => dispatch => {
  deleteContactFromStorage(contactId);
  dispatch({ type: DELETE_CONTACT, payload: { id: contactId } });
};
export const editContact = contactData => dispatch => {
  editContactInStorage(contactData);
  dispatch({
    type: EDIT_CONTACT,
    payload: { contact: contactData }
  });
};

export const setQuery = query => dispatch => {
  dispatch({
    type: SET_QUERY,
    payload: { query }
  });
};

export const searchContacts = query => dispatch => {
  const contacts = searchContactStorage(query);
  dispatch({ type: RECIEVE_CONTACTS, payload: { contacts } });
};
