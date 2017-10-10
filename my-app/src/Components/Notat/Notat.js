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
      active: false,
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
        <div className="container-fluid">
              <h1>Notes</h1>

               <button type="button" className="btn btnPlus" data-toggle="collapse" data-target="#form">+</button>

               <Form onSend={this.newNote}/>

               <div className="container-fluid">
                   {this.state.notes.length > 0 ? notes : ""}
               </div>
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
      return (<div className="inner">
                <div className="title">
                     <span>Edit</span>
                     <button type="button" className="btn del" onClick={this.delete}><i className="fa fa-trash"></i></button>
                     <button type="button" className="btn save" onClick={this.edit}><i className="fa fa-floppy-o"></i></button>
                </div>

                <div className="form-group">
                    <input type="text" value={this.state.title} onChange={this.changeTitle} className="form-control" />
                </div>
                <div className="form-group">
                    <textarea  name="text" value={this.state.text} onChange={this.changeText} className="form-control" rows="4"/>
                </div>

             </div>)
    } else {
       return (<div className="inner">
                 <div className="title">
                     <h2>{this.props.title}</h2>
                     <button type="button" className="btn del" onClick={this.delete}><i className="fa fa-trash"></i></button>
                     <button type="button" className="btn" onClick={this.edit}><i className="fa fa-pencil"></i></button>
                 </div>
                 <div className="text">
                   <p>{this.props.text}</p>
                 </div>
               </div>)
    }
  }
  render() { //xs for phone, sm for tablet, md for desktop
    return ( <div className="note col-xs-10 col-sm-6 col-md-4">
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
    return ( <form className="collapse" id="form">
                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1">Title</label>
                     <input type="text" value={this.state.title} onChange={this.changeTitle}
                            className="form-control" placeholder="Enter title" />
                  </div>

                  <div className="form-group">
                     <textarea  name="text" value={this.state.text} onChange={this.changeText}
                                placeholder="Enter message" className="form-control" rows="4"/>
                  </div>

                  <button onClick={this.handleSubmit} className="btn">Save</button>
                  <button onClick={this.handleClear} className="btn">Clear</button>
              </form>  )
  }
}

export default Notat;
