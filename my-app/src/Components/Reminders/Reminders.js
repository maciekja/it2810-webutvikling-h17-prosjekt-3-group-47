import React from 'react';
import ReactDOM from 'react-dom';

import ReminderHandler from "./ReminderHandler.js";
import ReminderItem from "./ReminderItem.js";

class Reminders extends React.Component {
   constructor() {
    super();

    this.newReminders = this.newReminders.bind(this)
    this.saveReminders = this.saveReminders.bind(this);
    this.removeReminders = this.removeReminders.bind(this);
    this.updateReminders = this.updateReminders.bind(this);

    this.state = {notes: []};
  }

  componentDidMount() {
    let notes = localStorage.getItem("notes");
      if (notes)
         this.setState({notes: JSON.parse(notes)});
  }

  newReminders(date, title) {
    let notes = [{deadline: date, title: title, pastDate: false}].concat(this.state.notes);
    this.saveReminders(notes);
  }

  saveReminders(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({notes: notes});
  }

  removeReminders(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.saveReminders(notes);
  }

  updateReminders(index, pastDate) {
    let notes = this.state.notes;
    this.saveReminders(notes);
  }

  render() {
    let notes = this.state.notes.map((obj, i) =>
      <ReminderItem key={i} index={i} deadline={obj.deadline} title={obj.title} pastDate={obj.pastDate} onUpdate={this.updateReminders} onRemove={this.removeReminders} />
    );
    return (
      <div>
        <h1>Reminder</h1>
        <div className="content">
          <ReminderHandler onSend={this.newReminders}/>
          <div className="container-fluid">
            {this.state.notes.length > 0 ? notes : ""}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Reminders/>, document.getElementById('root'));

export default Reminders;
