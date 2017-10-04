import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Todo.css';

class Todo extends React.Component {
   constructor(props) {
    super(props);
    this.newTodo = this.newTodo.bind(this)
    this.saveTodo = this.saveTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.state = {todos:[]};
  }

  componentDidMount() {
    let todos = localStorage.getItem("todos");
      if (todos)
         this.setState({todos: JSON.parse(todos)});
  }

  newTodo(title, text) {
    let todos = [{title: title, done: true}].concat(this.state.todos);
    this.saveTodo(todos);
  }

  saveTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({todos: todos});
  }

  removeTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.saveTodo(todos);
  }

  updateTodo(index, done) {
    let todos = this.state.todos;
		todos[index].done = done;
    this.saveTodo(todos);
  }

  render() {

  let todos = this.state.todos.map((obj, i) =>
               <TodoItem key={i} index={i} title={obj.title} done={obj.done} onUpdate={this.updateTodo} onRemove={this.removeTodo} />
               );

    return (	<div className="content">
								<Head onSend={this.newTodo}/>
              	<div className="container-fluid">
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

    this.state = {title: ''};
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

	changeDone(e) {
		this.setState({done: e.target.value});
	}

  handleSubmit(e) {
    if(this.state.title != '') {
			this.props.onSend(this.state.title);
			this.setState({title: ''});
		}
  }


  render() {
    return (		<div className="head">
	              	<h2>Todo list:</h2>
	               	<input type="text" value={this.state.title} onChange={this.changeTitle}
	                            className="Head-control" placeholder="Enter title" />
								<span onClick={this.handleSubmit} className="btn">Save</span>
              	</div>	)
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {title: this.props.title, done: this.props.done}; //by default render as text
  }

  change() {
    this.setState({done: !this.state.done});
  }

  delete() {
    this.props.onRemove(this.props.index);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  renderDoneOrNot() {
    if(this.props.done) {
      return (<div className="todoitem done" onClick={this.change}>
                <div className="title">
									{this.props.title}
                  <span className="close" onClick={this.delete}>&times;</span>
                </div>
             </div>)
    } else {
       return (<div className="todoitem not-done" onClick={this.change}>
                 <div className="title">
                     {this.props.title}
                     <span className="close" onClick={this.delete}>&times;</span>
                 </div>
               </div>)
    }
  }
  render() { //xs for phone, sm for tablet, md for desktop
    return ( <div className="TodoItem col-xs-10 col-sm-6 col-md-4">
                {this.renderDoneOrNot()}
             </div>
    )
  }
}

ReactDOM.render(<Todo/>, document.getElementById('root'));

export default Todo;
