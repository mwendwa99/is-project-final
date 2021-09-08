import NavBar from './Components/navBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SpotDetails from './Components/SpotDetails'
import About from './Components/About';
import { SaveError } from './Components/User/SavedSpot'
import { SavedSpot } from './Components/User/SavedSpot'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
  return (
    <Router >
      <Switch>
        <div className="App">
          <NavBar />
          <Route path='/' exact component={Home} />
          <Route path='/details' component={SpotDetails} />
          <Route path='/about' component={About} />
          <Route path='/my-spot' component={SaveError} />
        </div>
      </Switch>
    </Router>
  )
};

export const UnAuthenticatedRoutes = () => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path='/' exact
            render={(props) => (
              <Login />
            )}
          />
          <Route path='/register' component={Register} />
        </div>
      </Switch>
    </Router>
  )
}
