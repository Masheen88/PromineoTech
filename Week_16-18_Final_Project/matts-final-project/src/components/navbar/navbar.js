import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./navbar.css";

import Reviews from "../mainPages/reviews";
import HomePage from "../mainPages/homePage";

class Navibar extends React.Component {
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
                <Navbar.Brand href="/">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                    <NavDropdown title="Site Content" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/view-products">
                        View Products
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/play-a-game">
                        Play A Game
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/reviews">
                        Reviews
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Routes>
                <Route exact path="#home" element={<HomePage />}></Route>
                <Route exact path="/reviews" element={<Reviews />}></Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Navibar;
