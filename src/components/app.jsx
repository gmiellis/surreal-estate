import React, { Component } from 'react';
import './styles/app.css';
import NavBar from './nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
    };
  }

  // handleLogin = onLogin => {

  // };

  render() {
    return (
      <div>
        <div className="header">
          <h2 className="title">
            <i className="fas fa-building"></i>
            &nbsp; Surreal Estates
          </h2>
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
