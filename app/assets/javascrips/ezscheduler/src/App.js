import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Users/>
      </div>
    );
  }
}

export default App;
