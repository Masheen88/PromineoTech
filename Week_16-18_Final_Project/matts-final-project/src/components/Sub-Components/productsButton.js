import React from "react";

import { Button } from "react-bootstrap";

export default class ProductsButton extends React.Component {
  render() {
    return (
      <div>
        <Button id="productButton">Add to Cart</Button>
      </div>
    );
  }
}
