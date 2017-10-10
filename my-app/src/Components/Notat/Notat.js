import React, { Component } from 'react';
import './Notat.css';

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
    console.log("hehe")
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

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {title: this.props.title, text: this.props.text, editing: false}; //by default render as text
  }

  edit() {
    this.props.onUpdate(this.props.index, this.state.title, this.state.text);
    this.setState({editing: !this.state.editing});
  }

  delete() {
    this.props.onRemove(this.props.index);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  changeText(e) {
    this.setState({text: e.target.value});
  }

  renderNoteOrEdit() {
    if(this.state.editing) {
      return (
				<div className="inner">
          <div className="title">
					<input type="text" className="editInput" value={this.state.title} onChange={this.changeTitle}  />
						<div className="btnz">
							<span className="noteBtn" onClick={this.edit}>&#10003;</span>
						</div>
          </div>

          <div className="">

            <textarea className="editTextarea" value={this.state.text} onChange={this.changeText}/>
          </div>

       </div>)
    } else {
       return (
				<div className="inner">
        	<div className="title">
      		<h2>{this.props.title}</h2>
					<div className="btnz">
					 <span className="noteBtn" onClick={this.edit}>&#9998;</span>
           <span className="noteBtn" onClick={this.delete}>&#10060;</span>
					</div>
				</div>
  			<div className="">
        	<p>{this.props.text}</p>
      	</div>
  		</div>)
    }
  }
  render() {
    return (
			<div className="note">
      	{this.renderNoteOrEdit()}
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {title: '', text: ''};
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  changeText(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    this.props.onSend(this.state.title, this.state.text);
    this.handleClear(e);
  }

  handleClear(e) {
    this.setState({title: '', text: ''});
    e.preventDefault();
  }

  render() {
    return (
			<form className="newNote" id="form">
				<div className="newNoteHead">
					<div className="head-left">
						<span>Post-it-notes:</span>
					</div>
					<div className="head-right">
	        	<input type="text" className="input" value={this.state.title}
						onChange={this.changeTitle} placeholder="Enter new title" />
						<span onClick={this.handleSubmit} className="btn">Save</span>
						<span onClick={this.handleClear} className="btn">Clear</span>
					</div>
				</div>
				<div className="newBody">
					<textarea value={this.state.text} onChange={this.changeText}
					placeholder="Enter message" rows="4"/>
				</div>

	    </form>  )
  }
}

export default Notat;
