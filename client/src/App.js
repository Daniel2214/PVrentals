import "./App.css";
import React, { Fragment, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateProperty from "./components/properties/CreateProperty";
import Dashboard from "./components/properties/Dashboard";
import Property from "./components/properties/Property";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
import { UserContext } from "./state/UserContext";

const tokenExist = localStorage.token !== "null";

if (tokenExist) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/properties" component={Dashboard} />
            <Route exact path="/property" component={Property} />
            <Route exact path="/properties/create" component={CreateProperty} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
