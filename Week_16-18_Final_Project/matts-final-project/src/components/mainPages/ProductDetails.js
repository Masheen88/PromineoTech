import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { productsAPI } from "../rest/productAPI";

import ProductsButton from "../Sub-Components/productsButton";

import "./ProductDetails.css";

//product images
import img1 from "../images/product_images/1.png";

function ProductDetails() {
  const [productName, setProductName] = useState("Kayak 1");
  const [productQty, setProductQty] = useState("");
  const [productPrice, setProductPrice] = useState("$499.99");
  const [productImg, setProductImg] = useState("img1");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    productsAPI.post([productName, productQty, productPrice, productImg]);
    setProductName("");
    setProductImg("");
    setProductQty("");
    setProductPrice("");
  };

  function handleChange(event) {
    console.log("AddNewReview handleChange setProductName", "Kayak 1");
    console.log("AddNewReview handleChange setProductQty", event.target.value);
    console.log("AddNewReview handleChange setProductPrice", "$499.99");
    console.log("AddNewReview handleChange setProductImg", "img1");
    // setProductName(`Kayak 1`);
    // setProductImg(`img1`);
    setProductQty(`${event.target.value}`);
    // setProductPrice(`$499.99`);
  }

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
                  <input
                    id="productQtyField"
                    name="productQty"
                    maxLength={2}
                    onChange={handleChange}
                    value={productQty.productQty}
                  ></input>
                  <div>
                    <Link id="addToCartButton" to="/cart" onClick={onSubmit}>
                      <ProductsButton />
                    </Link>
                  </div>
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
                      "This Kayak 1 works very well. It harmonically improves my
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
