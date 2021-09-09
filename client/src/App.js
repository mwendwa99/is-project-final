import React, { useContext, useState } from 'react';
import './App.css';
import { useAuth } from './Context/AuthContext';
// import { useAuthState } from './ContextProvider';
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './routes';

function App() {

  let { loggedIn } = useAuth();
  console.log(`status: ${loggedIn}`);

  // const { loginState } = useContext(useAuthState);

  return (loggedIn ? (<AuthenticatedRoutes />) : (<UnAuthenticatedRoutes />))

};

export default App;
