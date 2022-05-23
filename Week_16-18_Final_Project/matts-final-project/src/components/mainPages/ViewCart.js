import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { commentsAPI } from "../rest/mainAPI";
import "./ViewCart.css";

import { AddNewReview } from "../Forms/AddNewReview";
import ReviewsList from "../Forms/reviewForm";
import Road from "../images/reviews_icon.svg";

function ViewCart() {
  const fetchHouses = async () => {
    const houses = await commentsAPI.get();
    this.setState({ houses });
    console.log("fetch API Test", houses);
  };

  const updateHouse = async (updatedComment) => {
    await commentsAPI.put(updatedComment);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  let state = {
    comments: [],
  };

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
