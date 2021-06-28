import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const name = isAuthenticated && user ? user.name : "";

  const authLinks = (
    <ul>
      <li style={{ marginRight: "3rem" }}>Welcome {name}</li>
      <li>
        <Link to="/properties/create">Create new property</Link>
      </li>
      <li>
        <Link to="/properties">Properties</Link>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/properties">Properties</Link>
      </li>
    </ul>
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">PV Real Estate</Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
