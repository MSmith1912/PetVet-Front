import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AnimalPage from './Pages/AnimalPage';
import NavBar from './components/NavBar';
import { Component } from 'react';
import AllUsersContainer from './containers/AllUsersContainer';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/users" component={AllUsersContainer} />
              <Route path="/animals" component={AnimalPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
