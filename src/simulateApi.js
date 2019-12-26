import uuid from "uuid";

export const getAllContactsFromStorage = () => getFromLocalStorage();

export const getSingleContactFromStorage = id =>
  getFromLocalStorage().find(contact => contact.id === id);

export const addContactToStorage = contactData => {
  const data = getFromLocalStorage();
  contactData.id = uuid.v4();
  data.push(contactData);
  saveToLocalStorage(data);
  return contactData;
};

export const editContactInStorage = contactData => {
  let data = getFromLocalStorage();
  data = data.map(contact =>
    contact.id === contactData.id ? contactData : contact
  );
  saveToLocalStorage(data);
  return data;
};

export const deleteContactFromStorage = id => {
  let data = getFromLocalStorage();
  data = data.filter(contact => contact.id !== id);
  saveToLocalStorage(data);
  return data;
};
export const searchContactStorage = query =>
  getFromLocalStorage().filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

const getFromLocalStorage = () => JSON.parse(localStorage.getItem("contacts"));

const saveToLocalStorage = data =>
  localStorage.setItem("contacts", JSON.stringify(data));
export const utils = { getFromLocalStorage, saveToLocalStorage };
