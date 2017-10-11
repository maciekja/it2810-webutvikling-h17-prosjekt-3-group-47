import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import remindMe from '../../Images/remindMeB.png'
import notes from '../../Images/notesB.png'
import stopwatch from '../../Images/stopwatchB.png'
import todo from '../../Images/todoB.png'

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>Your Personal Organizer</h1>
        <div className="container">
          <Link to="stopwatch" style={{ textDecoration: 'none' }}>
            <div className="flexItem">
              <h2>Stopwatch</h2><img src={stopwatch} />
            </div>
          </Link>
        </div>
        <div className="container">
          <Link to="todo" style={{ textDecoration: 'none' }}>
            <div className="flexItem">
              <h2>To do</h2> <img src={todo} />
            </div>
          </Link>
        </div>
        <div className="container">
          <Link to="notes" style={{ textDecoration: 'none' }}>
            <div className="flexItem">
              <h2>Notes</h2> <img src={notes} />
            </div>
          </Link>
        </div>
        <div className="container">
          <Link to="reminders" style={{ textDecoration: 'none' }}>
            <div className="flexItem">
              <h2>Reminders</h2><img src={remindMe} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
