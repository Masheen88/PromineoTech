import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Navbar extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //When creating alot of elements you can point to a method to make calling it much shorter.

    return (
      <nav>
        <div class="dropdown">
          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Action
            </a>
            <a href="#" className="dropdown-item">
              Another action
            </a>
          </div>
        </div>
        <div className="nav-link">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}
