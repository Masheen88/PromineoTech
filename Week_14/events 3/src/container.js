import React from "react";
import Counter from "./counter";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {},
      highestCount: 0,
      highestCountName: "",
    };
    this.countClicks = this.countClicks.bind(this);
  }

  //Count clicks is passed into the Counter below
  countClicks(name) {
    this.setState((state) => {
      //? is a ternary operator that works like an if condition ie. condition ? expressionIfTrue : expressionIfFalse
      state.counts[name] ? (state.counts[name] += 1) : (state.counts[name] = 1);

      if (state.counts[name] > state.highestCount) {
        state.highestCount = state.counts[name];
        state.highestCountName = name;
      }
      return state;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.highestCountName}</h2>
        <Counter
          name="one"
          count={this.state.counts.one}
          onClick={this.countClicks} //Props is passed into this attribute onClick
        />
        ,
        <Counter
          name="two"
          count={this.state.counts.two}
          onClick={this.countClicks}
        />
        ,
        <Counter
          name="three"
          count={this.state.counts.three}
          onClick={this.countClicks}
        />
        ,
        <Counter
          name="one"
          count={this.state.counts.one}
          onClick={this.countClicks}
        />
        ,
      </div>
    );
  }
}
