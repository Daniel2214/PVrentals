import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { State } from "./state/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jmmtxc75.us.auth0.com"
      clientId="CzgUj945q6EXWZQMq7ODFDIUcXZTi09c"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
