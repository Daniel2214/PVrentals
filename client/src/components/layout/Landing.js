import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">PV Real Estate</h1>
          <p className="lead">
            Look for the best properties for rent and sell in Puerto Vallarta
          </p>
          <div className="buttons">
            <Link to="/properties" className="btn btn-primary">
              Properties
            </Link>
            {isAuthenticated ? <div></div> : <LoginButton />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
