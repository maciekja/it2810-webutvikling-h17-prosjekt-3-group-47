import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import done from '../../Images/done.png'
import notdone from '../../Images/notdone.png'
import trash from '../../Images/trash.png'

class ToDo extends React.Component {
   constructor(props) {
    super(props);
    this.newToDo = this.newToDo.bind(this)
    this.saveToDo = this.saveToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.state = {todos:[]};
  }

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

  render() {

  let todos = this.state.todos.map((obj, i) =>
               <ToDoItem key={i} index={i} title={obj.title} done={obj.done} onUpdate={this.updateToDo} onRemove={this.removeToDo} />
               );

    return (
			<div className="content">
        <div className="title"><h1>To do</h1></div>
				<Head onSend={this.newToDo}/>
      	<div className="todos">
          {this.state.todos.length > 0 ? todos : ""}
      	</div>
  		</div>
    )
  }
}

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


  render() {
    return (
      <div className="sidebar">
        <form>
          <h2>Task:</h2>
          <input type="text" value={this.state.title} onChange={this.changeTitle}
          className="head-input" placeholder="Enter task" />
        <span onClick={this.handleSubmit} className="btnSidebar">Save</span>
        </form>
      </div>
    );
  }
}

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

  renderDoneOrNot() {
    if(this.props.done) {
      return (
        <div className="todoitem done">
          <img className="check" src={done} />
          <div className="titleToDo" onClick={this.change}>
            {this.props.title}
          </div>
          <span className="close" onClick={this.delete}>&times;</span>
        </div>
      );
    } else {
       return (
         <div className="todoitem not-done">
           <div className="check"></div>
           <div className="titleToDo" onClick={this.change}>
             {this.props.title}
           </div>
           <span className="close" onClick={this.delete}>&times;</span>
         </div>
       );
    }
  }
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
