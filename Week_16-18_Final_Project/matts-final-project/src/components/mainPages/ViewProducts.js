import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

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

function ViewProducts() {
  return (
    <div>
      <h1 id="homePage_title">Check out these awesome Kayaks!</h1>
      <Container>
        <Row>
          <Col id="product">
            <h2 id="productName">Kayak 1</h2>
            <img id="productThumbnail" alt="" src={img1} />
            <br />
            <div className="productDescription">
              This is a fine kayak! <br />
              Only this one has a detail page :)
            </div>
            <Link to={"/kayak-1"}>
              <ViewProductButton />
            </Link>
            <Link to={"/cart"}>{/* <ProductsButton /> */}</Link>
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 2</h2>
            <img id="productThumbnail" alt="" src={img2} />
            <br />
            <div className="productDescription">
              This is a another fine kayak!
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 3</h2>
            <img id="productThumbnail" alt="" src={img3} />
            <br />
            <div className="productDescription">
              This is yet another fine kayak!
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
        </Row>
        <Row>
          <Col id="product">
            <h2 id="productName">Kayak 4</h2>
            <img id="productThumbnail" alt="" src={img4} />
            <br />
            <div className="productDescription">So you really like kayaks?</div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 5</h2>
            <img id="productThumbnail" alt="" src={img5} />
            <br />
            <div className="productDescription">
              So you really relaly like kayaks?
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 6</h2>
            <img id="productThumbnail" alt="" src={img6} />
            <br />
            <div className="productDescription">
              So you really really really like kayaks?!
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
        </Row>
        <Row>
          <Col id="product">
            <h2 id="productName">Kayak 7</h2>
            <img id="productThumbnail" alt="" src={img7} />
            <br />
            <div className="productDescription">
              This is kayak is gonna hurt your wallet!
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 8</h2>
            <img id="productThumbnail" alt="" src={img8} />
            <br />
            <div className="productDescription">
              The kayak for you, the elite!
            </div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
          </Col>
          <Col id="product">
            <h2 id="productName">Kayak 9</h2>
            <img id="productThumbnail" alt="" src={img9} />
            <br />
            <div className="productDescription">What a bundle-o-yaks!!!</div>
            <Link to={"#"}>
              <ViewProductButton />
            </Link>
            {/* <ProductsButton /> */}
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
