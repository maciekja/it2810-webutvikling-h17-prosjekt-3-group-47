import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png'
import remindMe from './remindMe.png'
import notes from './notes.png'
import calendar from './calendar.png'
import todo from './todo.png'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} />
        <img id="remindMe" src={remindMe} />
        <img id="notesIMG" src={notes} />
        <img id="calendarIMG" src={calendar} />
        <img id="todoIMG" src={todo} />
      </div>
    );
  }
}

export default Header;
