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
    this.showCalendar = this.showCalendar.bind(this)
    this.showNote = this.showNote.bind(this)
  }

  changeState(i){
    
  }

  showCalendar(i){
    console.log("Calendar")
    this.setState(state => {
            return {active: 0};
        });
  }

  showNote(i){
    console.log("notes")
    this.setState(state => {
            return {active: 1};
        });
  }

  render() {
    if(this.state.active === 0){
      return (
        <div>
            <Header />
            <Menu Calendar={this.showCalendar} Notes={this.showNote}/>
            <Calendar ref="Calendar"/>
        </div>
      );
    }else if(this.state.active === 1){
      return (
        <div>
            <Header />
            <Menu Calendar={this.showCalendar} Notes={this.showNote}/>
            <Notat ref="Notat" />
        </div>
      );
    }
  }
}

export default App;
