import React from "react";
import Post from "./post";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class NewsFeed extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    let comments = [
      {
        content: "This is my post",
        username: "Matthew",
        date: "4/10/2022",
      },
      {
        content: "This is Another post",
        username: "Ashley",
        date: "3/21/2022",
      },
      {
        content: "This is my post",
        username: "Tom",
        date: "1/4/2022",
      },
    ];
    return (
      <div className="container">
        {/* //Post state - Uses a ... spread operator with commments array and the post 'content. */}
        <Post
          {...{
            comments: comments,
            content: "This is my first post content test!",
          }}
        />
        <Post
          {...{
            comments: comments,
            content: "This is my second post content test!",
          }}
        />
        <Post
          {...{
            comments: comments,
            content: "This is my third post!!!",
          }}
        />
      </div>
    );
  }
}
