import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    //Bind this. to the handleClick method.
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle clicks via a function.
  //Counter is used inside the handleClick
  handleClick() {
    console.log(this.props);
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      //this.handleClick Function
      //handleClick is used inside the button itself
      <button className="btn btn-primary" onClick={this.handleClick}>
        {this.props.name} {this.props.count}
      </button>
    );
  }
}
