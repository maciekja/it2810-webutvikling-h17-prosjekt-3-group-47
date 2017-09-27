import React, { Component } from 'react';
import './Menu.css';
import './../../App.js'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h2>menu</h2>
        <ul>
          <li><button type="button" onClick={this.props.Calendar}>Calendar</button></li>
          <li><button type="button" onClick={this.props.Notes}>Notes</button></li>
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
