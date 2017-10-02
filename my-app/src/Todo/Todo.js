import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
	deleteItem() {
		console.console.log("this is tits");
	}
 	addToList() {
		var note = document.getElementById("in").value;
		if(note !== "") {
		var node = document.createElement("li");
		var text = document.createTextNode(note);
		var span = document.createElement("div");
		var close = document.createTextNode("\u00D7");
		node.appendChild(text);
		span.className="close";
		span.appendChild(close);
		node.appendChild(span);
		document.getElementById("list").appendChild(node);
		document.getElementById("in").value = "";
    	}
 	}



	render() {
		return (
			<div className="main">
				<div className="top">
					<div className="heading">
						<h2>To-do:</h2>
					</div>
					<div className="adds">
		        <input type="text" id="in" placeholder="Enter new item..."></input>
						<span id="add" onClick={this.addToList}>Add</span>
					</div>
				</div>
				<div id="todos" className="todos">
					<ul id="list"></ul>
				</div>
			</div>
		);
	}
}

export default Todo;
