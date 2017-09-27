import React, { Component } from 'react';

class ToDo extends Component {


  setParentState(i){
    this.props.State(i);
    console.log(i);
  }

  render() {
    return (
      <div className="ToDo">
        <h1>To Do</h1>
      </div>
    );
  }
}

export default ToDo;
