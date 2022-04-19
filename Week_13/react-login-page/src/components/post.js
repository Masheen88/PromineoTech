import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Post extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">
          Username and Time
        </div>
        <div className="card-body">This is where the content goes!</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
    //When creating alot of elements you can point to a method to make calling it much shorter.
    // return myE( //Non JSX
    //   "div",
    //   { className: "card w-75" },
    //   myE(
    //     "div",
    //     { className: "card-header bg-success text-white" },
    //     "Username and Time"
    //   ),
    //   myE("div", { className: "card-body" }, "Post Content"),
    //   myE(
    //     "div",
    //     { className: "card-footer" },
    //     myE(LikeButton, {}, null),
    //     myE("span", {}, " "),
    //     myE(ReplyButton, {}, null),
    //     myE("br", {}, null),
    //     myE(Comment, {}, null),
    //     myE(Comment, {}, null)
    //   )
    // );
  }
}
