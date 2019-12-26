import React from "react";
import { Link } from "react-router-dom";
const Contact = ({ contact: { id, name, phone, email } }) => (
  <Link
    to={`/contacts/${id}`}
    style={{ textDecoration: "none", color: "black" }}
  >
    <ul
      className="list-group-item"
      style={{ marginBottom: "20px", listStyle: "none" }}
    >
      <li>Id:{id}</li>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
    </ul>
  </Link>
);

export default Contact;
