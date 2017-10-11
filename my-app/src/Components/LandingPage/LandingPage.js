import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>SuperPIM</h1>
        <div className="container">
          <div className="flexItem">
            <h2>Calendar</h2>
          </div>
          <div className="flexItem">
            <h2>To do</h2>
          </div>
        </div>
        <div className="container">
          <div className="flexItem">
              <h2>Notes</h2>
            </div>
            <div className="flexItem">
              <h2>Reminders</h2>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
