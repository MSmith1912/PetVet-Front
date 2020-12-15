import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AnimalPage from './Pages/AnimalPage';
import UserPage from './Pages/UserPage';
import NavBar from './components/NavBar';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/users" component={UserPage} />
              <Route path="/animals" component={AnimalPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
