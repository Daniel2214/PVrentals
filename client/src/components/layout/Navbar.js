import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../state/UserContext";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

const Navbar = () => {
  const logout = () => {
    // clearSession();
    // removeUser();
  };

  const authLinks = (
    <ul>
      <li style={{ marginRight: "3rem" }}>Welcome </li>
      <li>
        <Link to="/properties">Properties</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/properties">Properties</Link>
      </li>
      <li>
        <LoginButton />
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">PV Real Estate</Link>
      </h1>
      <Fragment>{false ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
