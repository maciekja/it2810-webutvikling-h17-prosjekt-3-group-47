import React, { Component } from 'react';
import './Notat.css';
import Form from "./Form.js";
import Note from "./Note.js";

/*
Loades notes from localstorage
Manages classes: loading, saving, removing and updating notes
*/
class Notat extends Component {
  constructor(props) {
    super(props);
    this.newNote = this.newNote.bind(this)
    this.saveNote = this.saveNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.state = {
      notes:[],
      active: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let notes = localStorage.getItem("notes");
      if (notes)
         this.setState({notes: JSON.parse(notes)});
  }

  newNote(title, text) {
    let notes = [{title: title, text: text}].concat(this.state.notes);
    this.saveNote(notes);
  }

  saveNote(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({notes: notes});
  }

  removeNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.saveNote(notes);
  }

  updateNote(index, title, text) {
    let notes = this.state.notes;
    notes[index].title = title;
    notes[index].text = text;
    this.saveNote(notes);
  }

  handleClick() {
    console.log("Test")
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    let notes = this.state.notes.map((obj, i) =>
              <Note key={i} index={i} title={obj.title} text={obj.text} onUpdate={this.updateNote} onRemove={this.removeNote} />
              );
      return (
	       <div className="notes">
				 <Form onSend={this.newNote}/>
	           {this.state.notes.length > 0 ? notes : ""}
	       </div>
      );
  }
}

export default Notat;
