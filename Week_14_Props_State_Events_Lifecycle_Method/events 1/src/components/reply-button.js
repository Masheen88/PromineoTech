import React from "react";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class ReplyButton extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return <button className="btn btn-primary">Reply</button>;
    // return React.createElement( // NON JSX
    //   "button",
    //   { className: "btn btn-primary" },
    //   "Reply"
    // );
  }
}
