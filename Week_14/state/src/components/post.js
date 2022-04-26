import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Post extends React.Component {
  //state - constructor for the Posts class.
  //props must be included in the constructor to explicitly accept the props
  //You must always call the super(props); in the constructor first.
  constructor(props) {
    super(props);
    this.state = {
      //Props are added to the state in order to then be the source for the correct information to display
      comments: props.comments,
      content: props.content,
    };
  }
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    let comments = []; //array of all comments to display in the post.
    //Checks for the state of the comment ie. are there any comments in the state's comments property?
    if (this.state.comments) {
      //loops through each of this.state.comments and pushs a JSX Comment into the comments array []
      for (let comment of this.state.comments) {
        comments.push(<Comment {...comment} />);
      }
    }
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">
          Username and Time
        </div>
        <div className="card-body">{this.state.content}</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          {/* Passes in the comments array */}
          {comments}
        </div>
      </div>
    );
  }
}
