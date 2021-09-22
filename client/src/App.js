import React from 'react';
import './App.css';
import { useAuth } from './Context/AuthContext';
import { AuthenticatedRoutes, UnAuthenticatedRoutes, AdminRoute } from './routes';

function App() {
  const { userLoggedIn, adminLoggedIn } = useAuth();
  if (userLoggedIn) {
    console.log('logged in as a user!')
    return (
      <AuthenticatedRoutes />
    )
  }
  if (adminLoggedIn) {
    return (
      <AdminRoute />
    )
  }
  else {
    return (
      <UnAuthenticatedRoutes />
    )
  }
};

export default App;