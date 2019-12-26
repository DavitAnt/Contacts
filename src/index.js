import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import seedData from "./seedData";

const contactData = localStorage.getItem("contacts");
if (!contactData || JSON.parse(contactData).length === 0) {
  const stringArray = JSON.stringify(seedData);
  localStorage.setItem("contacts", stringArray);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
