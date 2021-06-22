import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { State } from "./state/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
  document.getElementById('root')
);
