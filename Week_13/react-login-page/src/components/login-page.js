import React from "react";
import Post from "./post";
import Navbar from "./navbar";
import LoginForm from "./login-form";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class LoginPage extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      <div className="container">
        <Navbar />
        <LoginForm />
        {/* <Post /> */}
      </div>
    );
    // return ( //NON JSX
    //   myE("div", { className: "container" }, myE(Post, {}, null)),
    //   myE(Post, {}, null),
    //   myE(Post, {}, null)
    // );
  }
}
