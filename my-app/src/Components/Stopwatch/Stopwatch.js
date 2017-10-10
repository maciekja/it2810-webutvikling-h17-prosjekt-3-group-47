import React, { Component } from 'react';

//make sure time is on 60 format and not 100
const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }

  //Starts the clock
  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  //stops the clock
  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  //reset clock to 0
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }

  //add new lap time
  handleLabClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    })
  }

  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
        <div className="stopwatch">
          <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

          {(this.state.secondsElapsed === 0 ||
            this.incrementer === this.state.lastClearedIncrementer
            ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
            : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
          )}

          {(this.state.secondsElapsed !== 0 &&
            this.incrementer !== this.state.lastClearedIncrementer
            ? <Button onClick={this.handleLabClick.bind(this)}>lap</Button>
            : null
          )}


          {(this.state.secondsElapsed !== 0 &&
            this.incrementer === this.state.lastClearedIncrementer
            ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
            : null
          )}

          <ul className="stopwatch-laps">
            { this.state.laps.map((lap, i) =>
                <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}


const Button = (props) =>
  <button type="button" {...props} className={"sbtn " + props.className } />;

export default Stopwatch;
