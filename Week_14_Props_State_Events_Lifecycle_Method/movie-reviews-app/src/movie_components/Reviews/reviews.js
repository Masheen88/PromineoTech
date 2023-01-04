import React from "react";
import MovieContainer from "./movie-container";
import MovieReview from "./review_submission_form";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Component comes with the class and extends to create the component you may work with
export default class Reviews extends React.Component {
  //render defines what the 'component' or html will be rendered to screen
  constructor(props) {
    super(props);
    this.state = {
      myRatings: [],
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  //function to count the average number of stars in the review
  getRating(moveReviewFormData) {
    console.log("getRating has been ran", moveReviewFormData);
    let totalStar1 = 0;
    let totalStar2 = 0;
    let totalStar3 = 0;
    let totalStar4 = 0;
    let totalStar5 = 0;
    let totalStars = 0;
    let reviewComments = moveReviewFormData;
    console.log("getRating reviewComments:", reviewComments);

    for (let i = 0; i < reviewComments.length; i++) {
      console.log("getRating reviewComments:", reviewComments[i].reviewRating);
      if (reviewComments[i].reviewRating === "star1") {
        totalStar1++;
      } else if (reviewComments[i].reviewRating === "star2") {
        totalStar2++;
      } else if (reviewComments[i].reviewRating === "star3") {
        totalStar3++;
      } else if (reviewComments[i].reviewRating === "star4") {
        totalStar4++;
      } else if (reviewComments[i].reviewRating === "star5") {
        totalStar5++;
      }
      //determine which star rating is the most common
      if (
        totalStar1 > totalStar2 &&
        totalStar1 > totalStar3 &&
        totalStar1 > totalStar4 &&
        totalStar1 > totalStar5
      ) {
        totalStars = "star1";
      } else if (
        totalStar2 > totalStar1 &&
        totalStar2 > totalStar3 &&
        totalStar2 > totalStar4 &&
        totalStar2 > totalStar5
      ) {
        totalStars = "star2";
      }
      if (
        totalStar3 > totalStar1 &&
        totalStar3 > totalStar2 &&
        totalStar3 > totalStar4 &&
        totalStar3 > totalStar5
      ) {
        totalStars = "star3";
      } else if (
        totalStar4 > totalStar1 &&
        totalStar4 > totalStar2 &&
        totalStar4 > totalStar3 &&
        totalStar4 > totalStar5
      ) {
        totalStars = "star4";
      }
      if (
        totalStar5 > totalStar1 &&
        totalStar5 > totalStar2 &&
        totalStar5 > totalStar3 &&
        totalStar5 > totalStar4
      ) {
        totalStars = "star5";
      }
    }
    console.log("getRating totalStars:", totalStars);

    console.log("getRating this.state.myRatings:", this.state.myRatings);
    this.myRatings = [...this.state.myRatings, totalStars];
    return totalStars;
  }

  handleRatingChange(event) {
    console.log("handleRatingChange has been ran", event);
    this.setState({
      myRatings: event,
    });
    console.log(
      "handleRatingChange this.state.myRatings:",
      this.state.myRatings
    );
  }

  render() {
    console.log("myRatings state:", this.state.myRatings);

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
        <MovieContainer {...movieOne} myRatings={this.state.myRatings} />
        <div className="card w-100">
          <div className="card-header bg-primary text-white">
            Movie Review Form
          </div>

          <div className="card-body">
            {/* <div className="reviewForm">This is a test too</div> */}
            {/* <ReviewSubmissionForm /> */}
          </div>
          <MovieReview handleRatingChange={this.handleRatingChange} />
          <div id="movieBodyComments"></div>
          <div
            id="movieBodyFooter"
            className="card-footer movieBodyFooter"
          ></div>
        </div>
      </div>
    );
    // function getRating() {
    //   console.log(<Review {...reviewOne} />);
    // }
  }
}
