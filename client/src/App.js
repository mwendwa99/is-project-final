import React, { useContext, useState } from 'react';
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

  const randomUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }
  const [user, setUser] = useState({ plate: '', email: '' });
  const [error, setError] = useState("");

  const login = details => {
    if (randomUser.email === details.email && randomUser.password === details.password) {
      setUser({
        plate: details.plate,
        email: details.email
      });
    } else {
      console.log('wrong details')
    }
  }

  const logout = (logState) => {
    setUser({
      plate: '',
      email: ''
    })
  }

  return (
    <Router>
      <div className="App">
        <NavBar user={user} logout={logout} />
        {(user.email !== '') ?
          (
            <>
              <h1> Welcome {user.plate}!</h1>
              <Route path='/home' component={Home} />
              <Route path='/details' component={SpotDetails} />
              <Route path='/about' component={About} />
              <Route path='/my-spot' component={SaveError} />
            </>
          )
          : (
            <>
              <Route path='/' exact
                //  component={Login}
                render={(props) => (
                  <Login {...props} login={login} error={error} />
                )}
              />
              <Route path='/register' component={Register} />
            </>
          )
        }
      </div>
    </Router>
  );
}

export default App;
