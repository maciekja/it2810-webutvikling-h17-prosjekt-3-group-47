import React, { Component } from 'react';
import './Menu.css';
import './../../App.js'
import logo from './logo.png'

class Menu extends Component {
  render() {
    return (
      <div className="menu">

          <button type="button" className ="appButton" onClick={this.props.Calendar}>Calendar</button><br />
          <button type="button" className ="appButton" onClick={this.props.Notes}>Notes</button><br />
          <button type="button" className ="appButton" onClick={this.props.Calendar}><img src={logo}/></button><br />
          <button type="button" className ="appButton" onClick={this.props.Notes}>Reminders</button><br />
      </div>
    );
  }
}

Menu.propTypes = {
  Calendar: React.PropTypes.func,
  Note: React.PropTypes.func
};

export default Menu;
