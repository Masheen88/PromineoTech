import React from "react";

import { Button } from "react-bootstrap";

export default class ViewProductButton extends React.Component {
  render() {
    return (
      <div>
        <Button className="btn-warning" id="productButton">
          View Product
        </Button>
      </div>
    );
  }
}
