import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <img id="logoIMG" src={logo} />
        <Link to="reminders"><button className="button" type="button"><img id="remindMe" src={remindMe} /></button></Link>
        <Link to="todo"><button className="button" type="button"><img id="todoIMG" src={todo} /></button></Link>
        <Link to="notes"><button className="button" type="button"><img id="notesIMG" src={notes} /></button></Link>
        <Link to="calendar"><button className="button" type="button"><img id="calendarIMG" src={calendar} /></button></Link>
      </div>
    );
  }
}

export default Header;
