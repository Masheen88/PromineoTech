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
    let commentOne = {
      content: "This is my post",
      username: "Matthew",
      date: "4/10/2022",
    };
    let commentTwo = {
      content: "This is Another post",
      username: "Ashley",
      date: "3/21/2022",
    };
    let commentThree = {
      content: "This is my post",
      username: "Tom",
      date: "1/4/2022",
    };
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">
          Username and Time
        </div>
        <div className="card-body">This is where the content goes!</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          <Comment {...commentOne} />
          <Comment {...commentTwo} />
          <Comment {...commentThree} />
        </div>
      </div>
    );
  }
}
