import React, { Component } from 'react';

/*
Manages edit or delete to notes
Manages changes to specific notes: update title and text, and clear and submit changes
*/
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {title: this.props.title, text: this.props.text, editing: false}; //by default render as text
  }

  //edit given note
  edit() {
    this.props.onUpdate(this.props.index, this.state.title, this.state.text);
    this.setState({editing: !this.state.editing});
  }

  //delete given note
  delete() {
    this.props.onRemove(this.props.index);
  }

  //change title of given note
  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  //changes text of given note
  changeText(e) {
    this.setState({text: e.target.value});
  }

  //loades given note or edit
  renderNoteOrEdit() {
    if(this.state.editing) {
      return (
				<div className="inner">
          <div className="titleNote">
					<input type="text" className="editInput" value={this.state.title} onChange={this.changeTitle}  />
						<div className="btnz">
							<span className="noteBtn" onClick={this.edit}> &#10003; </span>
						</div>
          </div>

          <div className="">
            <textarea className="editTextarea" value={this.state.text} onChange={this.changeText}/>
          </div>

       </div>)
    } else {
       return (
				<div className="inner">
        	<div className="titleNote">
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

export default Note;
