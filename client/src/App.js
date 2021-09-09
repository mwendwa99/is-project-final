import React from 'react';
import './App.css';
import { useAuth } from './Context/AuthContext';
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './routes';

function App() {

  let { loggedIn } = useAuth();

  return (loggedIn ? (<AuthenticatedRoutes />) : (<UnAuthenticatedRoutes />))

};

export default App;
