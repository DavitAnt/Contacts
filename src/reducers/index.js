import {
  ADD_CONTACT,
  RECIEVE_CONTACTS,
  RECIEVE_SINGLE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_QUERY
} from "../actions/types";
const initialState = { contacts: [], selectedContact: {}, query: "" };

export default function contactsAppReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload.contact]
      };
    case RECIEVE_CONTACTS:
      return { ...state, contacts: payload.contacts };
    case RECIEVE_SINGLE_CONTACT:
      return { ...state, selectedContact: payload.selectedContact };
    case DELETE_CONTACT:
      return {
        ...state,
        selectedContact: {},
        contacts: state.contacts.filter(contact => contact.id !== payload.id)
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === payload.contact.id ? payload.contact : contact
        ),
        selectedContact: payload.contact
      };
    case SET_QUERY:
      return {
        ...state,
        query: payload.query
      };
    default:
      return state;
  }
}
