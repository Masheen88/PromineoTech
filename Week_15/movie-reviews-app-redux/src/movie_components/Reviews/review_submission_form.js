import React from "react";

const API_ENDPOINT =
  "https://crudcrud.com/api/fefc4273465241649324e0708dac4dbc/api/movies";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class ReviewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewComments: [],
      currentDateTime: Date().toLocaleString(),
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    // ._id is the id assigned by the database.
    return fetch(`${API_ENDPOINT}/${comment._id}`, {
      method: "POST", //updates the house where adding or deleting a room
      headers: {
        "Conent-Type": "application/json",
      },
      body: JSON.stringify(comment), //sends the house to be updated in the database.
    });
  }

  //On submit passes form data to render.
  handleSubmit(event) {
    console.log("handleSUbmit event:", event);
    event.preventDefault();

    console.log("handleSubmit reviewcomments:", this.state.reviewComments);
    let reviewComments = this.state.reviewComments;
    console.log(
      "index 0) handleSubmit fullName:",
      event.target.elements.fullName.value
    );
    let fullName = event.target.elements.fullName.value;
    console.log(
      "index 1) handleSubmit movieDescription:",
      event.target.elements.movieDescription.value
    );
    let movieDescription = event.target.elements.movieDescription.value;
    console.log(
      "index 2) handleSubmit email:",
      event.target.elements.email.value
    );
    let email = event.target.elements.email.value;

    let id = parseInt(this.state.reviewComments.length + 1);
    console.log("index 3) handleSubmit id =:", id);

    let date = this.state.currentDateTime;
    console.log("index 4) handleSUbmit date =:", date);

    let reviewStarRating = event.target.elements.star.value;
    console.log("index 5) handleSubmit starRating:", reviewStarRating);

    reviewComments.push([
      fullName,
      movieDescription,
      email,
      id + 1,
      date,
      reviewStarRating,
    ]);
    this.setState({ reviewComments });
  }

  //render defines what the 'component' or html will be rendered to screeen
  render() {
    return (
      <div>
        <form id="movieReviewForm" onSubmit={this.handleSubmit.bind(this)}>
          <div name="todaysDate" value={this.state.currentDateTime}>
            {this.state.currentDateTime["todaysDate"]}
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-12">
                <div className="stars">
                  {" "}
                  <input
                    className="star star-5"
                    id="star-5"
                    type="radio"
                    name="star"
                    value="star5"
                  />{" "}
                  <label className="star star-5" htmlFor="star-5"></label>{" "}
                  <input
                    className="star star-4"
                    id="star-4"
                    type="radio"
                    name="star"
                    value="star4"
                  />{" "}
                  <label className="star star-4" htmlFor="star-4"></label>{" "}
                  <input
                    className="star star-3"
                    id="star-3"
                    type="radio"
                    name="star"
                    value="star3"
                  />{" "}
                  <label className="star star-3" htmlFor="star-3"></label>{" "}
                  <input
                    className="star star-2"
                    id="star-2"
                    type="radio"
                    name="star"
                    value="star2"
                  />{" "}
                  <label className="star star-2" htmlFor="star-2"></label>{" "}
                  <input
                    className="star star-1"
                    id="star-1"
                    type="radio"
                    name="star"
                    value="star1"
                  />{" "}
                  <label className="star star-1" htmlFor="star-1"></label>{" "}
                </div>
              </div>
            </div>
            <label htmlFor="emailInput">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Input email"
            />
            <small className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="fullNameInput">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
              value={this.state.reviewComments["fullName"]}
            />
          </div>
          <label htmlFor="exampleFormControlTextarea1">
            So how was the movie?
          </label>
          <textarea
            name="movieDescription"
            type="text"
            className="form-control"
            id="textArea"
            placeholder="This movie was the best movie in the world!"
            rows="3"
            value={this.state.reviewComments["movieDescription"]}
          ></textarea>

          <button
            className="btn btn-primary form-control w-50 m-2"
            id="submitContactButton"
            value="Submit"
          >
            Submit Your Review
          </button>
        </form>

        <div className="reviewsList">
          <br />

          <div>
            {
              //map array data
              this.state.reviewComments.reverse().map(function (CommentValues) {
                console.log("from mapping - CommentValues:", CommentValues);
                this.addComment(CommentValues);
                return (
                  <div className="card w-75" key={CommentValues[3]}>
                    <div className="card-header bg-primary text-white">
                      <div className="row reviewCommentHeader">
                        <div className="col-sm-6 reviewName">
                          {CommentValues[0]} <br />{" "}
                          <img
                            id="userProfileImage"
                            src="images/users/matthew.jpeg"
                            alt={CommentValues[0]}
                          />
                        </div>
                        <div className="col-sm-6 reviewRatings">
                          {(() => {
                            if (CommentValues[5] === "star1") {
                              return (
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
                                    &nbsp;1 Star
                                  </label>
                                </div>
                              );
                            } else if (CommentValues[5] === "star2") {
                              return (
                                <div>
                                  <input
                                    className="star star-2"
                                    id="star-2"
                                    type="checkbox"
                                    name="star"
                                    value="star2"
                                    defaultChecked
                                  />
                                  <label
                                    id="reviewStar"
                                    className="star star-2"
                                    htmlFor="star-2"
                                  >
                                    &nbsp;2 Stars
                                  </label>
                                </div>
                              );
                            } else if (CommentValues[5] === "star3") {
                              return (
                                <div>
                                  <input
                                    className="star star-3"
                                    id="star-3"
                                    type="checkbox"
                                    name="star"
                                    value="star3"
                                    defaultChecked
                                  />
                                  <label
                                    id="reviewStar"
                                    className="star star-3"
                                    htmlFor="star-3"
                                  >
                                    &nbsp;3 Stars
                                  </label>
                                </div>
                              );
                            } else if (CommentValues[5] === "star4") {
                              return (
                                <div>
                                  <input
                                    className="star star-4"
                                    id="star-4"
                                    type="checkbox"
                                    name="star"
                                    value="star4"
                                    defaultChecked
                                  />
                                  <label
                                    id="reviewStar"
                                    className="star star-4"
                                    htmlFor="star-4"
                                  >
                                    &nbsp;4 Stars
                                  </label>
                                </div>
                              );
                            } else if (CommentValues[5] === "star5") {
                              return (
                                <div>
                                  <input
                                    className="star star-5"
                                    id="star-5"
                                    type="checkbox"
                                    name="star"
                                    value="star5"
                                    defaultChecked
                                  />
                                  <label
                                    id="reviewStar"
                                    className="star star-5"
                                    htmlFor="star-5"
                                  >
                                    &nbsp;5 Stars
                                  </label>
                                </div>
                              );
                            } else {
                              return (
                                <div>Movie didn't even deserve a star!!!</div>
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                    <div className="card-body reviewCommentBody">
                      {CommentValues[1]}
                    </div>
                    <div className="card-footer reviewCommentFooter">
                      {CommentValues[4]}
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
