import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h2>menu</h2>
        <ul>
          <Link to="calendar"><li><button type="button">Calendar</button></li></Link>
          <Link to="notes"><li><button type="button">Notes</button></li></Link>
          <Link to="todo"><li><button type="button">To Do</button></li></Link>
          <Link to="reminders"><li><button type="button">Reminders</button></li></Link>
        </ul>
      </div>
    );
  }
}

export default Menu;
