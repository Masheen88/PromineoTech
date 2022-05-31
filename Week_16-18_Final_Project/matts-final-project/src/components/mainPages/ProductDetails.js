import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";

import { Link } from "react-router-dom";

import ProductsButton from "../Sub-Components/productsButton";
import ViewProductButton from "../Sub-Components/viewProductButton";

import "./ProductDetails.css";

//product images
import img1 from "../images/product_images/1.png";

function ProductDetails() {
  return (
    <div className="productDetailPage">
      <div className="reviewsTitle">
        <h1>Kayak 1</h1>
        <div className="card">
          <div className="card-body">
            <img id="productDetailImage" alt="" src={img1} />
            <Container>
              <Row>
                <Col>
                  <h4>
                    <strong id="productPrice">$499.99</strong>{" "}
                    <s>(Was 599.99)</s>
                  </h4>
                  <Link to={"/cart"}>
                    <ProductsButton />
                  </Link>
                  <p className="card-text">
                    This is a great Kayak, ...if you intend to get wet.
                  </p>
                  <p className="card-text">
                    With our patented tachnology you are sure to find yourself
                    upside down in the water all the time! <br /> This Kayak is
                    the perfect, for those who love to look at fish! It doens't
                    sink, it floats, but upside down!
                  </p>
                  <i className="ProductDetailReviewBody">
                    <strong>
                      "This Kayak-1 works very well. It harmonically improves my
                      tennis by a lot."
                      <br />~ Darcy
                    </strong>
                  </i>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
