import React from "react";
import Reviews from "./reviews";
import Navbar from "../Navbar/navbar";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class ReviewsList extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    return (
      <div className="pageContainer">
        <div className="container-fluid navigationBar">
          <Navbar />
        </div>
        <div className="container movieReviewsContainer">
          <Reviews />,
        </div>
      </div>
    );
  }
}
