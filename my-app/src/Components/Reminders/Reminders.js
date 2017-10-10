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

    //Initialize notes
    this.state = {notes: []};
  }

  //If the component was successfully mounted, get notes from local storage
  componentDidMount() {
    let notes = localStorage.getItem("notes");
      if (notes) {
         this.setState({notes: JSON.parse(notes)});
      }
  }

  //Add new reminder with date and title/reminder which is by default not completed
  newReminders(date, title) {
    let notes = [{deadline: date, title: title, completed: false}].concat(this.state.notes);
    this.saveReminders(notes);
  }

  //Stringify reminder as JSON-object, and set to state
  saveReminders(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({notes: notes});
  }

  //Functionality to remove reminder from list
  removeReminders(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.saveReminders(notes);
  }

  //Updates the list if a change regarding completion has occured
  updateReminders(index, completed) {
    let notes = this.state.notes;
    this.saveReminders(notes);
  }

  render() {
    //Loops through all reminders, and prints them out
    let notes = this.state.notes.map((obj, i) =>
      <ReminderItem key={i} index={i} deadline={obj.deadline} title={obj.title} completed={obj.completed} onUpdate={this.updateReminders} onRemove={this.removeReminders} />
    );
    return (
      <div className="content">
			  <ReminderHandler onSend={this.newReminders}/>
        <div className="container-fluid">
          {this.state.notes.length > 0 ? notes : ""}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Reminders/>, document.getElementById('root'));

export default Reminders;
