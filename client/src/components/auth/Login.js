import React, { Fragment, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../state/UserContext";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

const Login = () => {
  const [token, clearSession, addSession, auth, addUser] =
    useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(user);
      await axios.post("/api/auth", body, config).then((res) => {
        addSession(res.data.token);
      });
      const tokenExist = localStorage.token !== "null";
      if (tokenExist) {
        setAuthToken(localStorage.token);
      }
      await axios.get("/api/auth").then((res) => {
        addUser(res.data);
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  if (auth.isAuthenticated) {
    return <Redirect to="/properties" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into your account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
