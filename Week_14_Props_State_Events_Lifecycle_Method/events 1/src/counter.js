import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      count: 0,
    };
    //Bind this. to the handleClick method.
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle clicks via a function.
  handleClick() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return (
      //this.handleClick Function
      <button className="btn btn-primary" onClick={this.handleClick}>
        {this.state.name} {this.state.count}
      </button>
    );
  }
}
