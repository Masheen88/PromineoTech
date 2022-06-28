import React from "react";
import Navbar from "./navbar";
import LoginForm from "./login-form";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class LoginPage extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      <div className="container">
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}
