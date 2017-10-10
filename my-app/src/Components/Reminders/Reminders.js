import React from 'react';
import ReactDOM from 'react-dom';

import ReminderHandler from "./ReminderHandler.js";
import ReminderItem from "./ReminderItem.js";

class Reminders extends React.Component {
   constructor() {
    super();

    //Binds handlers to functions to avoid undefined functions
    this.newReminders = this.newReminders.bind(this)
    this.saveReminders = this.saveReminders.bind(this);
    this.removeReminders = this.removeReminders.bind(this);
    this.updateReminders = this.updateReminders.bind(this);

    //Initialize rnotes
    this.state = {rnotes: []};
  }

  //If the component was successfully mounted, get rnotes from local storage
  componentDidMount() {
    let rnotes = localStorage.getItem("rnotes");
      if (rnotes) {
         this.setState({rnotes: JSON.parse(rnotes)});
      }
  }

  //Add new reminder with date and title/reminder which is by default not completed
  newReminders(date, title) {
    let rnotes = [{deadline: date, title: title, completed: false}].concat(this.state.rnotes);
    this.saveReminders(rnotes);
  }

  //Stringify reminder as JSON-object, and set to state
  saveReminders(rnotes) {
    localStorage.setItem('rnotes', JSON.stringify(rnotes));
    this.setState({rnotes: rnotes});
  }

  //Functionality to remove reminder from list
  removeReminders(index) {
    let rnotes = this.state.rnotes;
    rnotes.splice(index, 1);
    this.saveReminders(rnotes);
  }

  //Updates the list if a change regarding completion has occured
  updateReminders(index, completed) {
    let rnotes = this.state.rnotes;
    this.saveReminders(rnotes);
  }

  render() {
    //Loops through all reminders, and prints them out
    let rnotes = this.state.rnotes.map((obj, i) =>
      <ReminderItem key={i} index={i} deadline={obj.deadline} title={obj.title} completed={obj.completed} onUpdate={this.updateReminders} onRemove={this.removeReminders} />
    );
    return (
      <div className="content">
			  <ReminderHandler onSend={this.newReminders}/>
        <div className="container-fluid">
          {this.state.rnotes.length > 0 ? rnotes : ""}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Reminders/>, document.getElementById('root'));

export default Reminders;
