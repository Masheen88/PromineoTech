import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class LoginForm extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      <div
        className="container bg-dark bg-opacity-0.8 d-flex w-50"
        id="loginForm"
      >
        <div className="center">
          <h2>Log In </h2>
          <div className="emailLogin">
            Username:{" "}
            <span>
              <input></input>
            </span>
          </div>
          <div className="emailLogin">
            Password:&nbsp;{" "}
            <span>
              <input></input>
            </span>
          </div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    );
  }
}
