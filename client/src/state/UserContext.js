import React, { useState, useEffect, createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const UserContext = createContext(null);

export const State = ({ children }) => {
  const [token, setToken] = useState(loadFromLocalStorage("token"));
  const [auth, setAuth] = useState({
    user: '',
    isAuthenticated: false
  })
  useEffect(() => {
    saveToLocalStorage(token, "token");
  }, [token]);

  const clearSession = () => {
    setToken(null);
  }

  const addSession = (userToken) => {
    setToken(userToken);
  }

  const addUser = (userProfile) => {
    setAuth({
      user: userProfile,
      isAuthenticated: true
    });
  }

  const removeUser = () => {
    setAuth({
      user: '',
      isAuthenticated: false
    });
  }


  return (
    <UserContext.Provider value={[token, clearSession, addSession, auth, addUser, removeUser]}>
      {children}
    </UserContext.Provider>
  );
};


