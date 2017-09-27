import React, { Component } from 'react';
import './../../App.js'

class Reminder extends Component {


  setParentState(i){
    this.props.State(i);
    console.log(i);
  }

  render() {
    return (
      <div className="Reminders">
        <h1>Reminders</h1>
      </div>
    );
  }
}


export default Reminder;
