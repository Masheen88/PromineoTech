import React, { useState, useEffect } from "react";

import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { productsAPI } from "../rest/productAPI";

// import "./ViewCart.css";

import img1 from "../images/product_images/1.png";
import img2 from "../images/product_images/2.jpg";
import img3 from "../images/product_images/3.jpg";
import img4 from "../images/product_images/4.jpg";
import img5 from "../images/product_images/5.jpeg";
import img6 from "../images/product_images/6.jpg";
import img7 from "../images/product_images/7.jpg";
import img8 from "../images/product_images/8.jpeg";
import img9 from "../images/product_images/9.jpg";

function AddCartProducts() {
  const [productData, setAPIData] = useState([]);
  const cartTotal = [];

  function addProducts() {
    return cartTotal.push(499.99);
  }

  function addAll(productyQty) {
    console.log("CartCalculation productData:");
    console.log("CartCalculation productyQty:", productyQty);
    let newTotal = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      newTotal += productData[i].productQty * 499.99;
    }
    console.log("CartCalculation newTotal:", newTotal);
    return parseFloat(newTotal).toFixed(2);
  }

  useEffect(() => {
    productsAPI
      .get("https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/products")
      .then((response) => {
        setAPIData(response);
      });
  }, []);

  return (
    <div className="viewCartPage">
      {[...productData].reverse().map((data, index) => {
        return (
          <Container hidden id="hiddenProductPriceContainer" key={index}>
            {addProducts()}
          </Container>
        );
      })}
      <div>${addAll()}</div>
    </div>
  );
}

export default AddCartProducts;
