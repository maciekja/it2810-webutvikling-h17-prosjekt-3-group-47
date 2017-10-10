import React, { Component } from 'react';

/*
Loades form to create new notes
Set title and text to notes
*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {title: '', text: ''};
  }

  //changes title to note
  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  //changes text to note
  changeText(e) {
    this.setState({text: e.target.value});
  }

  //submits the changes
  handleSubmit(e) {
    if(this.state.title != '' || this.state.text != '') {
			this.props.onSend(this.state.title, this.state.text);
    	this.handleClear(e);
			e.preventDefault();
		}
  }

  //clears note
  handleClear(e) {
    this.setState({title: '', text: ''});
    e.preventDefault();
  }

  render() {
    return (
      <div className="sidebar">
        <form className="newNote" id="form">
          <h2>Title</h2>
          <input type="text" className="input" value={this.state.title} onChange={this.changeTitle} placeholder="Enter new title" />
          <h2>Content</h2>
          <textarea value={this.state.text} onChange={this.changeText} placeholder="Enter message" rows="4"/>
          <span onClick={this.handleSubmit} className="btnSidebar">Save</span>
  	    </form>
      </div>
    );
  }
}

export default Form;
