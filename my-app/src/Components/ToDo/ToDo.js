import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import done from '../../Images/done.png'
import notdone from '../../Images/notdone.png'
import trash from '../../Images/trash.png'

/* Main component*/

class ToDo extends React.Component {
   constructor(props) {
    super(props);
    this.newToDo = this.newToDo.bind(this)
    this.saveToDo = this.saveToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.state = {todos:[]};
  }

	/* Class functions, all handling todoitems */

  componentDidMount() {
    let todos = localStorage.getItem("todos");
      if (todos)
         this.setState({todos: JSON.parse(todos)});
  }

  newToDo(title, text) {
    let todos = [{title: title, done: false}].concat(this.state.todos);
    this.saveToDo(todos);
  }

  saveToDo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({todos: todos});
  }

  removeToDo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.saveToDo(todos);
  }

  updateToDo(index, done) {
    let todos = this.state.todos;
		todos[index].done = done;
    this.saveToDo(todos);
  }

	/* Renders the content in a div, and retrieves components from the Head and Note classes*/

  render() {

  let todos = this.state.todos.map((obj, i) =>
               <ToDoItem key={i} index={i} title={obj.title} done={obj.done} onUpdate={this.updateToDo} onRemove={this.removeToDo} />
               );

    return (
			<div className="todo">
        <div className="title"><h1>To do</h1></div>
				<Head onSend={this.newToDo}/>
      	<div className="todos">
          {this.state.todos.length > 0 ? todos : ""}
      	</div>
  		</div>
    )
  }
}

/* Head component, the input form that handles new todos. */

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
		this.changeDone = this.changeDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {title: '', done: true};
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

	changeDone(e) {
		this.setState({done: e.target.value});
	}

  handleSubmit(e) {
    if(this.state.title != '') {
			this.props.onSend(this.state.title, this.state.done);
			this.setState({title: ''});
			e.preventDefault();
		}
  }

	/* Renders the sidebar with the input fields and button */

  render() {
    return (
      <div className="sidebar">
        <form>
          <h2>Task:</h2>
          <input type="text" value={this.state.title} onChange={this.changeTitle}
          className="head-input" placeholder="Enter task" />
        <button onClick={this.handleSubmit} className="btnSidebar">Save</button>
        </form>
      </div>
    );
  }
}

	/* Internal class that handles a single todo-item on the list, and the functionality to change and delete existing notes */

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
		this.changeDone = this.changeDone.bind(this);
    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {title: this.props.title, done: this.props.done}; //by default render as text
  }

  change() {
		this.props.onUpdate(this.props.index,  this.state.done);
    this.setState({done: !this.state.done});
  }

  delete() {
    this.props.onRemove(this.props.index);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

	changeDone(e) {
		this.setState({done: e.target.value});
	}

	/* internal function to descide if a todo is done or not, and renders it accordingly */

  renderDoneOrNot() {
    if(this.props.done) {
      return (
        <div className="todoitem done" onClick={this.change}>
          <img className="check" src={done} />
          <div className="titleToDo">
            {this.props.title}
          </div>
          <div onClick={this.delete}><img className="todoClose" src={trash} /></div>
        </div>
      );
    } else {
       return (
         <div className="todoitem not-done" onClick={this.change}>
           <img className="check" src={notdone} />
           <div className="titleToDo">
             {this.props.title}
           </div>
           <div onClick={this.delete}><img className="todoClose" src={trash} /></div>
         </div>
       );
    }
  }

	/* Render function to show a todoitem according to its state */

  render() { //xs for phone, sm for tablet, md for desktop
    return (
      <div className="ToDoItem col-xs-10 col-sm-6 col-md-4">
        {this.renderDoneOrNot()}
      </div>
    );
  }
}

ReactDOM.render(<ToDo/>, document.getElementById('root'));

export default ToDo;
