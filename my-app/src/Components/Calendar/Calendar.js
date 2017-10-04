import React, { Component } from 'react';
import './Calendar.css';
import mycalendar from './calendar.png';

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      active: true,
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
      <div className="calendar">
        <img id="mycalendar" src={mycalendar} />
      </div>

      );
    }else{
      return(
        <h1>lili</h1>
      );
    }
  }
}

export default Calendar;
