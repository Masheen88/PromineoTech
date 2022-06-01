import React, { useState, useEffect } from "react";

import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { productsAPI } from "../rest/productAPI";

import "./ViewCart.css";

import img1 from "../images/product_images/1.png";
import img2 from "../images/product_images/2.jpg";
import img3 from "../images/product_images/3.jpg";
import img4 from "../images/product_images/4.jpg";
import img5 from "../images/product_images/5.jpeg";
import img6 from "../images/product_images/6.jpg";
import img7 from "../images/product_images/7.jpg";
import img8 from "../images/product_images/8.jpeg";
import img9 from "../images/product_images/9.jpg";

import AddCartProducts from "../Sub-Components/CartCalculation";

function ViewCart() {
  const [productData, setAPIData] = useState([]);
  const [newProductQty, setNewProductQty] = useState("");
  const [ProductId, setProductId] = useState("");

  const deleteProduct = async (event) => {
    event.preventDefault();
    const deleteButtonId = event.target.value;
    productsAPI.apiDelete(deleteButtonId).then((response) => {
      setAPIData([response]);
    });
  };

  const deleteAllProducts = async (event) => {
    event.preventDefault();
    const deleteButtonId = event.target.value;
    productsAPI.apiDeleteAll().then((response) => {
      setAPIData([response]);
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    productsAPI.apiEdit([ProductId], [newProductQty]);
    setNewProductQty("");
    setProductId("");
  };

  function handleChange(event) {
    console.log("reviews handleChange event:", event);
    console.log("reviews handleChange name:", event.target.name);
    console.log("reviews onSubmit id:", event.target.classList.value);
    console.log("reviews handleChange value:", event.target.value);
    setNewProductQty(`${event.target.value}`);
    setProductId(`_id: ${event.target.classList.value}`);
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
      <h3> Just Viewing the cart!</h3>
      {[...productData].reverse().map((data, index) => {
        return (
          <Container id="reviewContainer" key={index}>
            <Row>
              <Col>
                <h3>Product Image</h3>
                <div id="CartProductField cartProductImage">
                  <Link to="/kayak-1">
                    <img id="productThumbnail" alt="" src={img1} />
                  </Link>
                </div>
              </Col>
              <Col>
                <h3>Product Name</h3>
                <div id="CartProductField cartProductName">
                  {data.productName}
                </div>
              </Col>
              <Col>
                <h3>Product Quantity</h3>
                <div id="CartProductField cartProductQty">
                  Qty:{" "}
                  <form onSubmit={onSubmit}>
                    <input
                      className={data.id}
                      id="cartProductQtyField"
                      name="productQty"
                      onChange={handleChange}
                      defaultValue={data.productQty}
                      value={newProductQty.productQty}
                    ></input>
                    &nbsp;
                    <Button variant="success" type="submit">
                      Update
                    </Button>
                  </form>
                </div>
              </Col>
              <Col>
                <h3>Product Price</h3>
                <div id="CartProductField cartProductName">
                  {data.productPrice}
                </div>
              </Col>
              <Col>
                <Button
                  className="btn btn-danger"
                  onClick={deleteProduct}
                  value={data.id}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        );
      })}

      <div className="viewCartPage">
        <div id="CartButtons" className="container">
          <div className="row">
            <div id="CartButton" className="col-sm-4">
              Cart Total
              <AddCartProducts />
            </div>
          </div>
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
