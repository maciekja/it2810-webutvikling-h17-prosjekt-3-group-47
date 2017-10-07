import React, { Component } from 'react';
import moment from 'moment';
import confirm from 'confirm';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Calendar.css'

class Addlecturer extends React.Component{
  render(){
    return(
      <div class="add-module">
        <form>
          <input></input>
        </form>
      </div>
    )
  }
}

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {size: 12}
  }

  render(){
    let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < 6; idx++){
        let cellID = `cell${i}-${idx}`
        if (idx == 0){
          cell.push(<td key={cellID} id={cellID}>time[i]</td>)
        }else {
          cell.push(<td key={cellID} id={cellID}></td>)
        }
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>tid</td>
              <td>mandag</td>
              <td>tirsdag</td>
              <td>onsdag</td>
              <td>torsdag</td>
              <td>fredag</td>
            </tr>
            {rows}
          </tbody>
        </table>
        <Addlecturer />
      </div>
    )
  }
}

export default Calendar;
