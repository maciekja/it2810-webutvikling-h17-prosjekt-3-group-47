import React, { Component } from 'react';
import './Menu.css';
import './../../App.js'

class Menu extends Component {


  setParentState(i){
    this.props.State(i);
    console.log(i);
  }

  render() {
    return (
      <div className="menu">
        <h2>menu</h2>
        <ul>
          <li><button type="button" onClick={() => this.setParentState(0)}>Calendar</button></li>
          <li><button type="button" onClick={() => this.setParentState(1)}>Notes</button></li>
          <li><button type="button" onClick={() => this.setParentState(2)}>To Do</button></li>
          <li><button type="button" onClick={() => this.setParentState(3)}>Reminders</button></li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  Calendar: React.PropTypes.func,
  Note: React.PropTypes.func
};

export default Menu;
