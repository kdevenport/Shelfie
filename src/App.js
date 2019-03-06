import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventoryList:[]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventoryList} />
        <Form />
      </div>
    );
  }
}

export default App;
