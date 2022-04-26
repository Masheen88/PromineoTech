import React from "react";
import Counter from "./counter";

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Counter name="One" />,
        <Counter name="Two" />,
        <Counter name="Three" />,
      </div>
    );
  }
}
