import React from "react";
import Review from "./reviews";
import AverageMovieStars from "./average-movie-rating";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class MovieContainer extends React.Component {
  //state - constructor for the Posts class.
  //props must be included in the constructor to explicitly accept the props
  //You must always call the super(props); in the constructor first.
  constructor(props) {
    super(props);
    this.state = {
      //Props are added to the state in order to then be the source for the correct information to display
      movieName: props.movieName,
      movieGenre: props.movieGenre,
      movieDescription: props.movieDescription,
      movieImage: props.movieImage,
      movieActors: props.movieActors,
      movieAverageRating: props.movieAverageRating,
    };
  }

  checkStarValue() {
    let averageStarRating = 5;
    let averageMovieStarRatingId = document.getElementById(
      "averageMovieStarRatingId"
    );
    for (let i = 0; i <= 5; i++) {
      const ratingStars = [
        ...document.getElementsByClassName(`averageStars-${i}`),
      ];
      console.log(ratingStars);
    }
    if ((averageStarRating = 5)) {
      console.log("this is a 5 star movie");
      return <div>Testing average stars</div>;
    }
  }
  //render defines what the 'componenet' or html will be rendered to screeen
  render() {
    console.log(this.state);
    let movies = []; //array of all comments to display in the post.
    //Checks for the state of the comment ie. are there any comments in the state's comments property?
    if (this.state.movies) {
      //loops through each of this.state.comments and pushs a JSX Comment into the comments array []
      for (let comment of this.state.movies) {
        console.log("Comment:", comment);
        movies.push(<Review {...comment} />);
      }
    }
    return (
      <div className="Moviecard">
        <div className="card-header bg-primary text-white">
          {this.state.movieName}
        </div>
        <div className="card-body">
          <div className="movieImage">
            <span className="movieText">
              <div className="container movieActors">
                <div className="row">
                  <div className="col-sm-3 ">
                    <div className="movieActor actor1">
                      {this.state.movieActors[0][0]}
                    </div>
                    <div className="actorName">
                      <br></br>
                      {this.state.movieActors[0][1]}
                    </div>
                  </div>
                  <div className="col-sm-3 ">
                    <div className="movieActor actor2">
                      {this.state.movieActors[1][0]}
                    </div>
                    <div className="actorName">
                      <br></br>
                      {this.state.movieActors[1][1]}
                    </div>
                  </div>
                  <div className="col-sm-3 ">
                    <div className="movieActor actor3">
                      {this.state.movieActors[2][0]}
                    </div>
                    <div className="actorName">
                      <br></br>
                      {this.state.movieActors[2][1]}
                    </div>
                  </div>
                  <div className="col-sm-3 ">
                    <div className="movieActor actor4">
                      {this.state.movieActors[3][0]}
                    </div>
                    <div className="actorName">
                      <br></br>
                      {this.state.movieActors[3][1]}
                    </div>
                  </div>
                </div>
              </div>
            </span>

            <div className="col-sm-12">{this.state.movieImage}</div>
          </div>
          <div className="movieGenre"> {this.state.movieGenre}</div>
          <div
            className="averageMovieStarRating"
            id="averageMovieStarRatingId"
            value="5"
            onClick={this.checkStarValue}
          >
            <AverageMovieStars />
          </div>
          <div className="movieDescription">{this.state.movieDescription}</div>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}
