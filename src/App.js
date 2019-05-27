import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route component = { Dashboard } exact path = '/' />
          <Route component = { Form } path= '/add' />
          <Route component = { Form } path = '/edit/:id' />
        </Switch>
      </div>
    );
  }
}

export default withRouter (App);
