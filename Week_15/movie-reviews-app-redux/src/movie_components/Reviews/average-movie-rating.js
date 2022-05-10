import React from "react";
// import css from "../StarRatings/starRatings.css";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class AverageMovieStars extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    //JSX

    return (
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center averageStars">
          <div className="">
            <form action="">
              {" "}
              <input
                className="averageStars averageStars-5"
                id="averageStars-5"
                type="radio"
                name="star"
                value="5"
                defaultChecked //Testing of hard-coded review star value
              />{" "}
              <label
                className="averageStars averageStars-5"
                htmlFor="averageStars-5"
              ></label>{" "}
              <input
                className="averageStars averageStars-4"
                id="averageStars-4"
                type="radio"
                name="star"
                value="4"
              />{" "}
              <label
                className="averageStars averageStars-4"
                htmlFor="averageStars-4"
              ></label>{" "}
              <input
                className="averageStars averageStars-3"
                id="averageStars-3"
                type="radio"
                name="star"
                value="3"
              />{" "}
              <label
                className="averageStars averageStars-3"
                htmlFor="averageStars-3"
              ></label>{" "}
              <input
                className="averageStars averageStars-2"
                id="averageStars-2"
                type="radio"
                name="star"
                value="2"
              />{" "}
              <label
                className="averageStars averageStars-2"
                htmlFor="averageStars-2"
              ></label>{" "}
              <input
                className="averageStars averageStars-1"
                id="averageStars-1"
                type="radio"
                name="star"
                value="1"
              />{" "}
              <label
                className="averageStars averageStars-1"
                htmlFor="averageStars-1"
              ></label>{" "}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
