import React, { Component } from 'react';
import Menu from './Components/Menu/Menu'
import Header from './Components/Header/Header.js'
import Calendar from './Components/Calendar/Calendar.js'
import Notat from './Components/Notat/Notat.js'
import ToDo from './Components/ToDo/ToDo.js'
import Reminders from './Components/Reminders/Reminders.js'
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      active: 0,
    };
    this.changeState = this.changeState.bind(this)
  }

  changeState(i){
    this.setState(state => {
            return {active: i};
        });
  }

  render() {
    if(this.state.active === 0){
      return (
        <div>
            <Header />
            <Menu State={this.changeState}/>
            <Calendar ref="Calendar"/>
        </div>
      );
    }else if(this.state.active === 1){
      return (
        <div>
            <Header />
            <Menu State={this.changeState}/>
            <Notat ref="Notat" />
        </div>
      );
    }else if(this.state.active === 2){
      return (
        <div>
            <Header />
            <Menu State={this.changeState}/>
            <ToDo ref="ToDo" />
        </div>
      );
    }else if(this.state.active === 3){
      return (
        <div>
            <Header />
            <Menu State={this.changeState}/>
            <Reminders ref="Reminders" />
        </div>
      );
    }
  }
}

export default App;
