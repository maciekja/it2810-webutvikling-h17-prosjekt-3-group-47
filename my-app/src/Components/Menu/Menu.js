import React, { Component } from 'react';
import './Menu.css';
import './../../App.js'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h2>menu</h2>
        <ul>
          <li><button type="button" onClick={this.props.links(1)}>To do</button></li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  links: React.PropTypes.func
};

export default Menu;
