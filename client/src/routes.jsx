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
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Admin} />
      </Switch>
    </Router>
  )
}

export const AuthenticatedRoutes = () => {
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
  )
};

export const UnAuthenticatedRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* <div className="App"> */}
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        {/* </div> */}
      </Switch>
    </Router>
  )
};
