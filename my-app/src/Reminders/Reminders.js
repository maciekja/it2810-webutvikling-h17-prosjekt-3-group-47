import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './Reminders.css';
import 'react-datepicker/dist/react-datepicker.css';

class Reminders extends Component {
  let reminders = [];

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

  removeNode() {
    console.log(1);
  }

  addtoList() {
    reminders.
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
