import React, { useContext, useState } from 'react';
import './App.css';
import { useAuth } from './Context/AuthContext';
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './routes';

function App() {

  let { loggedIn } = useAuth();
  console.log(`status: ${loggedIn}`);

  return (loggedIn ? (<AuthenticatedRoutes />) : (<UnAuthenticatedRoutes />))

};

export default App;
