import './App.css';
import NavBar from './Components/navBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SpotDetails from './Components/SpotDetails'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/details' component={SpotDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
