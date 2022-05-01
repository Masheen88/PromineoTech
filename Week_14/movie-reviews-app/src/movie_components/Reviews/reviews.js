import React from "react";
import MovieContainer from "./movie-container";
import ReviewSubmissionForm from "./review_submission_form.js";
import MovieReview from "./review_submission_form";
import Review from "./comment";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class Reviews extends React.Component {
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    let reviewComments = [];
    let reviewOne = {
      content: "This is my review test",
      username: "Matthew",
      date: "4/10/2022",
      url: <img alt="movie poster" src="./images/test.jpg" />,
      movierating: 1,
    };
    let reviewTwo = {
      content: "This is my review test two",
      username: "Ashley",
      date: "3/21/2022",
      movierating: 4,
    };
    let commentThree = {
      content: "This is my review test three",
      username: "Tom",
      date: "1/4/2022",
      movierating: 5,
    };

    let movieOne = {
      movieName: "Zombieland",
      movieGenre: "Comedy, Horror",
      movieDescription:
        "After a virus turns most people into zombies, the world's surviving humans remain locked in an ongoing battle against the hungry undead. Four survivors -- Tallahassee (Woody Harrelson) and his cohorts Columbus (Jesse Eisenberg), Wichita (Emma Stone) and Little Rock (Abigail Breslin) -- abide by a list of survival rules and zombie-killing strategies as they make their way toward a rumored safe haven in Los Angeles.",
      movieImage: (
        <img
          className="moviePoster"
          alt="poster"
          src={`images/posters/zombieland.jpg`}
        />
      ),
      // averageMovieRating: getRating(),
      movieActors: [
        [
          <img
            className="movieActor"
            alt="actor"
            src={`images/posters/woody.jpg`}
          />,
          "Woody Harrelson",
        ],
        [
          <img
            className="movieActor"
            alt="actor"
            src={`images/posters/Jesse.jpg`}
          />,
          "Jesse Eisenberg",
        ],
        [
          <img
            className="movieActor"
            alt="actor"
            src={`images/posters/Abigail.jpg`}
          />,
          "Abigail Breslin",
        ],
        [
          <img
            className="movieActor"
            alt="actor"
            src={`images/posters/Emma.jpg`}
          />,
          "Emma Stone",
        ],
      ],
    };
    return (
      <div className="movieBody w-75">
        <MovieContainer {...movieOne} />
        <div className="card w-100">
          <div className="card-header bg-primary text-white">
            Movie Review Form
          </div>

          <div className="card-body">
            {/* <div className="reviewForm">This is a test too</div> */}
            {/* <ReviewSubmissionForm /> */}
          </div>
          <MovieReview {...reviewComments} />
          <div id="movieBodyComments"></div>
          <div id="movieBodyFooter" className="card-footer movieBodyFooter">
            <Review {...reviewOne} />
            {/* <Review {...reviewTwo} /> */}
            {/* <Review {...commentThree} /> */}
          </div>
        </div>
      </div>
    );
    // function getRating() {
    //   console.log(<Review {...reviewOne} />);
    // }
  }
}
