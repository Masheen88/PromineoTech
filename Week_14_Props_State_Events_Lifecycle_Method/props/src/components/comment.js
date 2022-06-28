import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Comment extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //When creating alot of elements you can point to a method to make calling it much shorter.

    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">
          {this.props.username} {this.props.date}
        </div>
        <div className="card-body"> {this.props.content}</div>
        {/* this.props takes in the name give in posts.js ie. content="testTextHere" */}

        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
        </div>
      </div>
    );
  }
}
