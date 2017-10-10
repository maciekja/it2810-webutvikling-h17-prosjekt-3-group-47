import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class ReminderHandler extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
		this.changeDone = this.changeDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {reminders: '', done: true, deadline: moment()};
  }

  changeTitle(e) {
    this.setState({reminders: e.target.value});
  }

	changeDone(e) {
		this.setState({done: e.target.value});
	}

  changeDate(e) {
    this.setState({deadline: e.target.value})
  }

  handleSubmit(e) {
    if(this.state.reminders !== '') {
			this.props.onSend(this.state.deadline, this.state.reminders, this.state.done);
			this.setState({reminders: ''});
			e.preventDefault();
		}
  }

  handleChange(date) {
    this.setState({
      deadline: date
    });
  }

  render() {
    return (
      <div className="sidebar">
        <h2>Reminders:</h2>
        <div className="head-right">
          <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.deadline} onChange={this.handleChange} withPortal />
          <input type="text" value={this.state.reminders} onChange={this.changeTitle} className="head-input" placeholder="Enter a reminder" />
          <button onClick={this.handleSubmit} className="btnSidebar">Add</button>
        </div>
      </div>
    );
  }
}

export default ReminderHandler;
