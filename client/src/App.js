import React, { useContext } from 'react';
// import { AuthContext } from './Context/AuthContext'
import './App.css';
import NavBar from './Components/navBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SpotDetails from './Components/SpotDetails'
import About from './Components/About';
import { SaveError } from './Components/User/SavedSpot'
import { SavedSpot } from './Components/User/SavedSpot'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  // const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // console.log(user);
  // console.log(isAuthenticated);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/details' component={SpotDetails} />
        <Route path='/about' component={About} />
        <Route path='/my-spot' component={SaveError} />
      </div>
    </Router>
  );
}

export default App;
