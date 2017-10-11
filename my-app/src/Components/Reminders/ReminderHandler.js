import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class ReminderHandler extends React.Component {
  constructor(props) {
    super(props);

    //Binds handlers to functions to avoid undefined functions
    this.changeTitle = this.changeTitle.bind(this);
		this.changeCompletion = this.changeCompletion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {reminders: '', pastDate: false, deadline: moment()};
  }

  //Update title/reminder
  changeTitle(e) {
    this.setState({reminders: e.target.value});
  }

  //Update completion
	changeCompletion(e) {
		this.setState({pastDate: e.target.value});
	}

  //Update deadline
  changeDate(e) {
    this.setState({deadline: e.target.value})
  }

  //On send, add notes to state unless state is empty
  handleSubmit(e) {
    if(this.state.reminders !== '') {
			this.props.onSend(this.state.deadline, this.state.reminders, this.state.pastDate);
			this.setState({reminders: ''});
			e.preventDefault();
		}
  }

  //Change the deadline
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
          <input type="text" value={this.state.reminders} onChange={this.changeTitle} className="head-input" placeholder="Enter a reminder" />
          <h2>Date:</h2>
          <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.deadline} onChange={this.handleChange} withPortal />
          <button onClick={this.handleSubmit} className="btnSidebar">Save</button>
        </div>
      </div>
    );
  }
}

export default ReminderHandler;
