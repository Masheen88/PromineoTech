import React from "react";
import "./likebutton.css";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class LikeButton extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //JSX
    return <button className="btn btn-primary">Like</button>;
  }
}
