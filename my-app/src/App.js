import React, { Component } from 'react';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header.js';
import './App.css';


class App extends Component {
  render() {
    return(
    <div>
      <Header />
      <Menu />
      {this.props.children}
    </div>
    );
  }
}

export default App;
