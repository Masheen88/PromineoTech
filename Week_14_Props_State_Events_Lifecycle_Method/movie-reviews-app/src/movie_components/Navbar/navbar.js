import React from "react";

//makes the class accessible outside the file.
//React.Component comes with the class and extends to create the components you may work with
export default class Navbar extends React.Component {
  //render defines what the 'component' or html will be rendered to screen
  render() {
    //When creating a lot of elements you can point to a method to make calling it much shorter.

    return (
      <nav id="navibar" className="navbar navbar-expand-lg">
        <span className="navbar-brand">&nbsp;Movie Reviews</span>

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
              <a className="nav-link disabled" href="./">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="./About.html">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link disabled"
                id="navbarDropdownMenuLink"
                href="./"
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Cart.html">
                Movie Reviews <span>(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="./Contact.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
