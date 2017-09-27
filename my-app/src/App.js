import React, { Component } from 'react';
import Menu from './Components/Menu/Menu'
import Calendar from './Components/Calendar/Calendar.js'
import Notat from './Components/Notat/Notat.js'
import Header from './Components/Header/Header.js'
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      active: 0,
    };
  }

  changeState(i){
    this.state.active = i;
  }

  render() {
    if(this.state.active === 0){
      return (
        <div>
            <Header />
            <Menu links={this.changeState}/>
            <Calendar ref="Calendar"/>
        </div>
      );
    }else if(this.state.active === 1){
      return (
        <div>
            <Header />
            <Menu />
            <Notat ref="Notat" />
        </div>
      );
    }
  }
}

export default App;
