import React from "react";

export default class SecondCounter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      currentCount: props.state || 0,
    };
  }

  render() {
    console.log("render");
    return <p>{this.state.currentCount}</p>;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState((state) => ({
        //Adds +1 every second ie +1 every 1000ms
        currentCount: this.state.currentCount + 1,
      }));
    }, 1000);
  }

  shouldComponentUpdate(newtProps, nextState) {
    console.log("shouldComponentUpdate");
    //Updates every 2 seconds.
    return nextState.currentCount % 2 == 0;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
}
