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
      count: 0,
    };
  }
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //Set state method is used to invoke and update a state
    //setting a timeout can prevent any exceptions
    let tempComments = this.state.comments;

    //Test counter
    setTimeout(
      () =>
        this.setState(
          //first par. mystate is the state,second par. myprop is the props
          (mystate, myprop) => ({ count: mystate.count + 1 }),
          () => console.log(this.state.count)
        ),
      4000
    );
    let comments; //Is no longer set to an empty array
    //Checks for the state of the comment ie. are there any comments in the state's comments property?
    if (this.state.comments) {
      //Iterates through each comments it gives it an index and pushes them to the comments array.
      comments = this.state.comments.map((comment, index) => {
        <Comment key={index} {...comment} />;
      });
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
