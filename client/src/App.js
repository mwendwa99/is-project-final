import React from 'react';
import Form from './pages/components/common/Form';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { useAuth } from './Context/AuthContext';
import { AuthenticatedRoutes, UnAuthenticatedRoutes, AdminRoute } from './routes';

function App() {
  // const { userLoggedIn, adminLoggedIn } = useAuth();
  // if (userLoggedIn) {
  //   console.log('logged in as a user!')
  //   return (
  //     <AuthenticatedRoutes />
  //   )
  // }
  // if (adminLoggedIn) {
  //   return (
  //     <AdminRoute />
  //   )
  // }
  // else {
  //   return (
  //     <UnAuthenticatedRoutes />
  //   )
  // }
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Switch>
            <Route path='/login'>
              <Form title="Login" />
            </Route>
            <Route path='/register'>
              <Form title="Register" />
            </Route>
          </Switch>
        </>
      </div>
    </BrowserRouter>
  )
};

export default App;