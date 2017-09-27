import React, { Component } from 'react';

class Notat extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("hehe")
    this.setState({
      active: !this.state.active,
    });
  }
  render() {
    if(this.state.active){
      return (
        <div className="notat">
          <h1>jeg er et notat</h1>
        </div>
      );
    }else{
      return(
        <h1>lolo</h1>
      );
    }
  }
}

export default Notat;
