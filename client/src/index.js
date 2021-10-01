import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider, OrgProvider } from './Context/AuthContext';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// default axios configs
axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

ReactDOM.render(
  <AuthProvider>
    <OrgProvider>
      <App />
    </OrgProvider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
