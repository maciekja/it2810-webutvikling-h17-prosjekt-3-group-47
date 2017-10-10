import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationBadge from 'react-notification-badge';

import './Menu.css';

class Menu extends Component {
  getNotesCount() {
    let json = localStorage.getItem("notes");
    let obj = JSON.parse(json);
    if(json !== null) {
      return Object.keys(obj).length;
    } else {
      return 0;
    }
  }
  render() {
    let count = this.getNotesCount();
    return (
      <div className="menu">
        <h2>menu</h2>
        <ul>
          <Link to="calendar"><li><button type="button">Calendar</button></li></Link>
          <Link to="notes"><li><button type="button">Notes</button></li></Link>
          <Link to="todo"><li><button type="button">To Do</button></li></Link>
          <Link to="reminders"><li><button onClick={this.log} type="button">Reminders</button></li></Link>
          <NotificationBadge count={count} />
        </ul>
      </div>
    );
  }
}

export default Menu;
