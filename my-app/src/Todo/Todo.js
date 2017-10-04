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
    let todos = [{title: title, text: text}].concat(this.state.todos);
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

  updateTodo(index, title, text) {
    let todos = this.state.todos;
    todos[index].title = title;
    todos[index].text = text;
    this.saveTodo(todos);
  }

  render() {

  let todos = this.state.todos.map((obj, i) =>
               <TodoItem key={i} index={i} title={obj.title} onUpdate={this.updateTodo} onRemove={this.removeTodo} />
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
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {title: ''};
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    this.props.onSend(this.state.title);
  }


  render() {
    return (		<div className="head">
	              	<label>Title</label>
	               	<input type="text" value={this.state.title} onChange={this.changeTitle}
	                            className="Head-control" placeholder="Enter title" />
								<button onClick={this.handleSubmit} className="btn">Save</button>
              	</div>	)
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);

    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {title: this.props.title, done: false}; //by default render as text
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

  renderTodoItemOrchange() {
    if(this.state.done) {
      return (<div className="done">
                <div className="title">
									{this.props.title}
                  <button type="button" className="btn del" onClick={this.delete}></button>
                  <button type="button" className="btn save" onClick={this.change}></button>
                </div>
             </div>)
    } else {
       return (<div className="not-done">
                 <div className="title">
                     {this.props.title}
                     <button type="button" className="btn del" onClick={this.delete}></button>
                     <button type="button" className="btn" onClick={this.change}></button>
                 </div>
               </div>)
    }
  }
  render() { //xs for phone, sm for tablet, md for desktop
    return ( <div className="TodoItem col-xs-10 col-sm-6 col-md-4">
                {this.renderTodoItemOrchange()}
             </div>
    )
  }
}

ReactDOM.render(<Todo/>, document.getElementById('root'));

export default Todo;
