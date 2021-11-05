import React, { useEffect } from 'react';
import { useAuth } from './Context/AuthContext';
import NavBar from './Components/navBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SpotDetails from './Components/SpotDetails'
import About from './Components/About';
import { SaveError } from './Components/User/SavedSpot'
import Admin from './Admin/Admin';
import { SavedSpot } from './Components/User/SavedSpot';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import { OrgProvider } from './Context/OrgContext';
import { ControllerProvider } from './Context/ControllerContext';


export const AdminRoute = () => {
  const { adminLogin, adminLoggedIn } = useAuth();

  useEffect(() => {
    const currentUser = localStorage.getItem('admin')
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
  const { login, userLoggedIn } = useAuth();

  useEffect(() => {
    const currentUser = localStorage.getItem('user')
    if (currentUser === userLoggedIn) {
      login(currentUser);
    }
  }, [login, userLoggedIn]);

  return (
    <OrgProvider>
      <ControllerProvider>
        <Router >
          <Switch>
            <div className="App">
              <NavBar />
              <Route exact path='/' component={Home} />
              <Route exact path='/details' component={SpotDetails} />
              <Route exact path='/about' component={About} />
              <Route exact path='/my-spot' component={SaveError} />
              <Route exact path='/saved' component={SavedSpot} />
              <Footer />
            </div>
          </Switch>
        </Router>
      </ControllerProvider>
    </OrgProvider>
  );
};

export const UnAuthenticatedRoutes = () => {
  const { login, adminLogin } = useAuth()

  useEffect(() => {
    const user = localStorage.getItem('user')
    const admin = localStorage.getItem('admin')
    if (user) {
      login(user);
    }
    if (admin) {
      adminLogin(admin)
    }
  }, [login, adminLogin]);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  )
};