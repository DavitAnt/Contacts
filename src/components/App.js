import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Contacts from "./Contacts";

import NewContact from "./NewContact";
const App = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/contacts/new">
              <NewContact editMode={false} />
            </Route>
            <Route path="/contacts/search">
              <Contacts resource="search" />
            </Route>
            <Route path="/contacts/:contactId">
              <NewContact editMode={true} />
            </Route>
            <Route path="/contacts">
              <Contacts resource="contacts" />
            </Route>

            <Route exact path="/">
              <Contacts resource="contacts" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
