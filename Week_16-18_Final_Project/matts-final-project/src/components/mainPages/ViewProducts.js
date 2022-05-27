import React from "react";

import { Link } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import "./ViewProducts.css";

import ProductsButton from "../Sub-Components/productsButton";
import ViewProductButton from "../Sub-Components/viewProductButton";

//Page Background
import videoBg from "../videos/product-river.mp4";
//Product Images
import img1 from "../images/product_images/1.png";
import img2 from "../images/product_images/2.jpg";
import img3 from "../images/product_images/3.jpg";
import img4 from "../images/product_images/4.jpg";
import img5 from "../images/product_images/5.jpeg";
import img6 from "../images/product_images/6.jpg";
import img7 from "../images/product_images/7.jpg";
import img8 from "../images/product_images/8.jpeg";
import img9 from "../images/product_images/9.jpg";

import ProductDetails from "./ProductDetails";

function ViewProducts() {
  return (
    <div>
      {" "}
      <h1 id="homePage_title">Check out these awesome Kayaks!</h1>
      <Container>
        <Row>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img1} />
            <br />
            <div className="productDescription">This is a fine kayak!</div>
            <Link to={"/Components"}>
              <ViewProductButton />
            </Link>

            <ProductsButton />
            <div></div>
          </Col>
          <Col xs={3} id="product">
            <img id="productThumbnail" alt="" src={img2} />
            <br />
            <desc className="productDescription">
              This is another fine kayak!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img3} />
            <br />
            <desc className="productDescription">
              This is yet another fine kayak!
            </desc>
            <ProductsButton />
          </Col>
        </Row>
        <Row>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img4} />
            <br />
            <desc className="productDescription">
              So you really like kayaks!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img5} />
            <br />
            <desc className="productDescription">
              So you really really like kayaks!
            </desc>
            <ProductsButton />
          </Col>
          <Col xs={5} id="product">
            <img id="productThumbnail" alt="" src={img6} />
            <br />
            <desc className="productDescription">
              So you really really really like kayaks!
            </desc>
            <ProductsButton />
          </Col>
        </Row>
        <Row>
          <Col xs={5} id="product">
            <img id="productThumbnail" alt="" src={img7} />
            <br />
            <desc className="productDescription">
              This is kayak is gonna hurt your wallet!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img8} />
            <br />
            <desc className="productDescription">
              The kayak for you, the elite!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={img9} />
            <br />
            <desc className="productDescription">What a bundle-o-yaks!!!</desc>
            <ProductsButton />
          </Col>
        </Row>
      </Container>
      <div className="viewProductsPage video_bg">
        <video
          loop
          muted
          autoPlay
          disablePictureInPicture
          id="viewProductsPage__video"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ViewProducts;
