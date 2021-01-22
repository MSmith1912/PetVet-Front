import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';
import { Component } from 'react';
import AllUsersContainer from './containers/AllUsersContainer';
import SingleUserContainer from './containers/SingleUserContainer';
import AllAnimalsContainer from './containers/AllAnimalsContainer';
import SingleAnimalContainer from './containers/SingleAnimalContainer';
import { setAnimalOrderBy, setUserOrderBy } from './Redux/thunk';

class App extends Component {

  constructor() {
    super();
    this.state = {
      formDisplay: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  render(){
    return (
      <body>
      <Router>
        <div className="App">
            <NavBar />
            <div id="page-body">
              <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/users" component={AllUsersContainer} />
                <Route path="/user/:user_id" component={SingleUserContainer} />
                <Route path="/animals" component={AllAnimalsContainer} />
                <Route path="/animal/:animalId" component={SingleAnimalContainer} />
              </Switch>
            </div>
        </div>
      </Router>
      </body>
    )
  }
}

export default App;
