import React from "react";
import Review from "./reviews";

// let myE = React.createElement; //NON JSX

//makes the class accessible outside the file.
//React.Component comes with the class and extends to create the components you may work with
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
      myRatings: [""],
    };
    this.newRatings = this.newRatings.bind(this);
  }

  newRatings() {
    //convert this.props.myRatings to an array
    let myRatings = this.props.myRatings;
    let myRatingsArray = [];
    for (let i = 0; i < myRatings.length; i++) {
      myRatingsArray.push(myRatings[i]);
    }
    this.setState({ myRatings: myRatingsArray });
  }

  //update state if props rating length changes
  componentDidUpdate(prevProps) {
    if (this.props.myRatings.length !== prevProps.myRatings.length) {
      this.newRatings();
      console.log("updated", this.props.myRatings);
      console.log("updated2", this.state.myRatings);
    }
  }

  checkStarValue() {
    let averageStarRating = 5;
    return averageStarRating;
  }
  //render defines what the 'components' or html will be rendered to screen

  render() {
    // console.log(this.props.getRating());

    let movies = []; //array of all comments to display in the post.
    //Checks for the state of the comment ie. are there any comments in the state's comments property?
    if (this.state.movies) {
      //loops through each of this.state.comments and pushes a JSX Comment into the comments array []
      for (let comment of this.state.movies) {
        console.log("Comment:", comment);
        movies.push(<Review {...comment} />);
      }
    }
    return (
      <div className="Moviecard">
        Test: {this.state.myRatings}
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
          >
            Test
            {/* update state if the array has changed */}
            {this.state.myRatings > 0 ? (
              <div>
                <h3>Movie Rating</h3>

                <p>Movie Rating: {}</p>
                <div>
                  <input
                    className="star star-1"
                    type="checkbox"
                    name="star"
                    value="star1"
                    defaultChecked
                  />
                  <label
                    id="reviewStar"
                    className="star star-1"
                    htmlFor="star-1"
                  >
                    &nbsp;{this.props.myRatings}
                  </label>
                </div>
              </div>
            ) : (
              <div>No Reviews!</div>
            )}
          </div>
          <div className="movieDescription">{this.state.movieDescription}</div>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}
