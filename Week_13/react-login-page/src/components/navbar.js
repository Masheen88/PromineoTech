import React from "react";

let myE = React.createElement;

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Navbar extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //When creating alot of elements you can point to a method to make calling it much shorter.

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-opacity-0.8">
        <a className="navbar-brand" href="index.html">
          &nbsp;Login Page
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="./About.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="./Purchase.html">
                Purchase
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Macchiato
                </a>
                <a className="dropdown-item" href="#">
                  Iced Coffee
                </a>
                <a className="dropdown-item" href="#">
                  Cappuccino
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Contact.html">
                Login <span>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
