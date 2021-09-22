import React, { useState, useEffect } from 'react';
import { useAuth } from './Context/AuthContext';
import NavBar from './Components/navBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SpotDetails from './Components/SpotDetails'
import About from './Components/About';
import { SaveError } from './Components/User/SavedSpot'
import Admin from './Admin/Admin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AdminRoute = () => {
  const { adminLogin, adminLoggedIn } = useAuth();

  useEffect(() => {
    const currentUser = localStorage.getItem('email')
    if (currentUser === adminLoggedIn) {
      adminLogin(currentUser);
    }
  }, [adminLogin, adminLoggedIn]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Admin} />
      </Switch>
    </Router>
  )
}

export const AuthenticatedRoutes = () => {

  const { login, userLoggedIn } = useAuth()
  useEffect(() => {
    const currentUser = localStorage.getItem('email')
    if (currentUser === userLoggedIn) {
      login(currentUser);
    }
  }, [login, userLoggedIn]);

  return (
    <Router >
      <Switch>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={SpotDetails} />
          <Route exact path='/about' component={About} />
          <Route exact path='/my-spot' component={SaveError} />
        </div>
      </Switch>
    </Router>
  );
};

export const UnAuthenticatedRoutes = () => {
  const { login } = useAuth()

  useEffect(() => {
    const currentUser = localStorage.getItem('token')
    if (currentUser) {
      login(currentUser);
    }
  }, [login]);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  )
};