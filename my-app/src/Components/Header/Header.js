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
        <div className="navigation">
          <Link to="reminders"><button className="button" type="button"><img className="IMG" src={remindMe} /><br />Reminders</button></Link>
          <Link to="todo"><button className="button" type="button"><img className="IMG" src={todo} /><br />ToDo</button></Link>
          <Link to="notes"><button className="button" type="button"><img className="IMG" src={notes} /><br />Notes</button></Link>
          <Link to="calendar"><button className="button" type="button"><img className="IMG" src={calendar} /><br />Calendar</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
