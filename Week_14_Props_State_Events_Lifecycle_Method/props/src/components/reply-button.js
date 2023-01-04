import React from "react";

//makes the class accessible outside the file.
//React.Component comes with the class and extends to create the components you may work with
export default class ReplyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is the state of the component
    };
    //render defines what the 'component' or html will be rendered to screen
  }
  render() {
    return <button className="btn btn-primary">Reply</button>;
  }
}
