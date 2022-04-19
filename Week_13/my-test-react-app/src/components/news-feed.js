import React from "react";
import Post from "./post";

let myE = React.createElement;

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class NewsFeed extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      myE("div", { className: "container" }, myE(Post, {}, null)),
      myE(Post, {}, null),
      myE(Post, {}, null)
    );
  }
}
