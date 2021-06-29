import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import CreateProperty from "./components/properties/CreateProperty";
import Dashboard from "./components/properties/Dashboard";
import Property from "./components/properties/Property";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/properties" component={Dashboard} />
            <Route exact path="/property" component={Property} />
            <PrivateRoute
              exact
              path="/properties/create"
              component={CreateProperty}
            />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
