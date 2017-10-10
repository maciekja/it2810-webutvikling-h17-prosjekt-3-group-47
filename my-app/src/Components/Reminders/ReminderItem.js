import React from "react";


class ReminderItem extends React.Component {
  constructor(props) {
    super(props);

    //Binds handlers to functions to avoid undefined functions
    this.changeTitle = this.changeTitle.bind(this);
		this.changeCompletion = this.changeCompletion.bind(this);
    this.change = this.change.bind(this);
    this.delete = this.delete.bind(this);
    this.changeDate = this.changeDate.bind(this);

    //Sets the state of each reminder
    this.state = {deadline: this.props.deadline, title: this.props.title, pastDate: this.props.pastDate};
  }

  //When function is called, set reminder to the oppsite of what completion currently is
  change() {
		this.props.onUpdate(this.props.index, this.state.pastDate);
    this.setState({pastDate: !this.state.pastDate});
  }

  //Delete reminder at index
  delete() {
    this.props.onRemove(this.props.index);
  }

  //Changes reminder's text
  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  //Changes completion
	changeCompletion(e) {
		this.setState({pastDate: e.target.value});
	}

  //Changes date
  changeDate(e) {
    this.setState({deadline: e.target.value})
  }

  //Depending on whether reminder has been completed or not, give a div-styling accordingly
  renderDoneOrNot() {
    //Formats the date from JSON's JavaScript built-in date format to remove unecessary timestmap
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
