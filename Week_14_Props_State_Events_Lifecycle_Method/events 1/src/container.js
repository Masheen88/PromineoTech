import React from "react";
import Counter from "./counter";
import LikeButton from "./components/like-button";
import Button from "react-bootstrap/Button";

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Counter className="btn btn-primary" id="123" name="One" />,
        <Counter name="Two" />,
        <Counter name="Three" />,
        <LikeButton />,
        <LikeButton />,<Button variant="warning">Warning</Button>
        <LikeButton />,
        <LikeButton />,
        <LikeButton />,
        <LikeButton />,<Button variant="warning">Warning</Button>
        <LikeButton />
        <button className="btn btn-primary">Like</button>
        <div class=" container">
          <Button variant="warning">Warning</Button>
        </div>
      </div>
    );
  }
}
