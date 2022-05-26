import React from "react";

import { Button } from "react-bootstrap";

import "./ViewCart.css";

function ViewCart() {
  return (
    <div>
      <div className="viewCartPage">
        Just Viewing the cart!
        <div id="productGrid" className="container">
          <div className="row">
            <div id="CartProductField" className="col-sm-5">
              Product Image Here
            </div>
            <div id="CartProductField" className="col-sm-4">
              Product Name Here
            </div>
            <div id="CartProductField" className="col-sm-3">
              Product QTY Here
            </div>
          </div>
        </div>
        <div id="CartButtons" className="container">
          <div className="row">
            <div id="CartButton" className="col-sm-4">
              <Button className="btn btn-success ButtonText">Checkout</Button>
            </div>
            <div id="CartButton" className="col-sm-4">
              <Button className="btn btn-warning ButtonText">
                Calculate Shipping
              </Button>
            </div>
            <div id="CartButton" className="col-sm-4">
              <Button className="btn btn-danger ButtonText">Empty Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
