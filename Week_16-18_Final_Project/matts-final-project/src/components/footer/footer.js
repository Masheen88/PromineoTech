import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "./footer.css";

import logo from "../images/mountainwater.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <br />
              <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                sticky="top"
                id="myNav"
              >
                <Container>
                  <Navbar.Brand>
                    <span>
                      {" "}
                      <img id="siteLogo" alt="" src={logo} />{" "}
                      <span id="siteLogoTitle">Yak-Yak!</span>
                    </span>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/homePage">Home</Nav.Link>
                      <Nav.Link href="/about-us">About Us</Nav.Link>
                      <Nav.Link href="/about-us">View Products</Nav.Link>
                      <Nav.Link href="/reviews">Reviews</Nav.Link>
                      <Nav.Link href="/play-a-game" disabled>
                        Play A Game
                      </Nav.Link>
                      <Nav.Link href="/cart">View Cart</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Navigate to="/homePage" />}
                ></Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
