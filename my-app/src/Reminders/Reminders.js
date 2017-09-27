import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './Reminders.css';
import 'react-datepicker/dist/react-datepicker.css';

class Reminders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  addToList() {
      var note = document.getElementById("note").value;
      var date = document.getElementById("date").value;
      if(note !== "") {
        var node = document.createElement("li");
        var reminder = document.createTextNode("(" + date + ") - " + note);
        node.appendChild(reminder);
        document.getElementById("list").appendChild(node);
        document.getElementById("note").value = "";
      }
  }

  render() {
    return (
      <div className="Reminders">
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} id="date" />
        <input type="text" id="note"></input>
        <button type="submit" id="add" onClick={this.addToList}>Add</button>

        <div id="currentReminders">
          <ul id="list"></ul>
        </div>
      </div>
    );
  }
}

export default Reminders;
