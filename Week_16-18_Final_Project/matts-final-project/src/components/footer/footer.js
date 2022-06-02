import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons";

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
            <div className="icons-wrapper">
              <a
                id="footerIcon"
                href="https://linkedin.com/in/matthewthomascox/"
              >
                <Linkedin className="bi-linkedin icon" />
              </a>
              <a id="footerIcon" href="mailto:mattdrummerguy@gmail.com">
                <Envelope className="bi-envelope icon" />
              </a>
              <a id="footerIcon" href="https://github.com/Masheen88">
                <Github className="bi-github icon" />
              </a>
            </div>
            &copy; - {new Date().getFullYear()} Matthew Cox
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
