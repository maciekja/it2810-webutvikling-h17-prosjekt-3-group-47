import React from "react";

import "./reminder.css";

class ReminderItem extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
		this.changePastDate = this.changePastDate.bind(this);
    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);
    this.changeDate = this.changeDate.bind(this);

    this.state = {deadline: this.props.deadline, title: this.props.title, pastDate: this.props.pastDate};
  }

  change() {
		this.props.onUpdate(this.props.index, this.state.pastDate);
    this.setState({pastDate: !this.state.pastDate});
  }

  delete() {
    this.props.onRemove(this.props.index);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

	changePastDate(e) {
		this.setState({pastDate: e.target.value});
	}

  changeDate(e) {
    this.setState({deadline: e.target.value})
  }

  renderDoneOrNot() {
    let date = this.props.deadline.toString().slice(0, 10);
    if(this.state.pastDate) {
      return (
        <div className="todoitem not-pastDate">
          <div className="title" onClick={this.change}>
            {date}<br />
						{this.props.title}
            <span className="close" onClick={this.delete}>&times;</span>
          </div>
        </div>
      );
    } else {
       return (
         <div className="todoitem pastDate">
           <div className="title" onClick={this.change}>
             {date}<br />
             {this.props.title}
             <span className="close" onClick={this.delete}>&times;</span>
           </div>
         </div>
      );
    }
  }
  render() { //xs for phone, sm for tablet, md for desktop
    return ( <div className="ReminderItem col-xs-10 col-sm-6 col-md-4">
                {this.renderDoneOrNot()}
             </div>
    )
  }
}

export default ReminderItem;
