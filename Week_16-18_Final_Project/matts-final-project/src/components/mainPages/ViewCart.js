import React from "react";

import { Button, Container, Row, Col } from "react-bootstrap";

import "./ViewCart.css";
import img1 from "../images/product_images/1.png";

function ViewCart() {
  return (
    <div>
      <div className="viewCartPage">
        Just Viewing the cart!
        <Container id="productGrid">
          <Row>
            <Col>
              <h3>Product Image</h3>
              <div id="CartProductField cartProductImage">
                <img id="productThumbnail" alt="" src={img1} />
              </div>
            </Col>
            <Col>
              <h3>Product Name</h3>
              <div id="CartProductField cartProductName">Kayak 1</div>
            </Col>
            <Col>
              <h3>Product Quantity</h3>
              <div
                id="CartProductField cartProductQty"
                placeHolder="1"
                value="1"
                size={5}
              >
                Qty: <input></input>
              </div>
            </Col>
          </Row>
        </Container>
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
