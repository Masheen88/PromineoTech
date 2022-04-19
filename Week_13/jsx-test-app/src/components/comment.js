import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";

let myE = React.createElement;

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Comment extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //When creating alot of elements you can point to a method to make calling it much shorter.
    return myE(
      "div",
      { className: "card w-75" },
      myE(
        "div",
        { className: "card-header bg-success text-white" },
        "Username and Time"
      ),
      myE("div", { className: "card-body" }, "Comment Content"),
      myE(
        "div",
        { className: "card-footer" },
        myE(LikeButton, {}, null),
        myE("span", {}, " "),
        myE(ReplyButton, {}, null)
      )
    );
  }
}
