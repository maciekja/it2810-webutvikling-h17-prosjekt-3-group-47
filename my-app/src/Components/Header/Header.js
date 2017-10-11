import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import remindMe from '../../Images/remindMe.png'
import notes from '../../Images/notes.png'
import stopwatch from '../../Images/Stopwatch.png'
import todo from '../../Images/todo.png'

/*
Creating a header component.
Importing several images as buttons.
Linking with "Link to" -tag instead of origianl html "a href".
*/

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to=""><img id="logoIMG" src={logo} /></Link>
        <div className="navigation">
          <Link to="reminders"><button className="button" type="button"><img className="IMG" src={remindMe} /><br />Reminders</button></Link>
          <Link to="todo"><button className="button" type="button"><img className="IMG" src={todo} /><br />ToDo</button></Link>
          <Link to="notes"><button className="button" type="button"><img className="IMG" src={notes} /><br />Notes</button></Link>
          <Link to="stopwatch"><button className="button" type="button"><img className="IMG" src={stopwatch} /><br />Stopwatch</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
