import React, { Component } from 'react';
import './Notat.css';

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
    if(this.state.title != '' || this.state.text != '') {
			this.props.onSend(this.state.title, this.state.text);
    	this.handleClear(e);
			e.preventDefault();
		}
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

export default Form;
