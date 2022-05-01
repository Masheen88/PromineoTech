import React from "react";
import ReplyButton from "../reply-button";
import LikeButton from "../like-button";
import MovieReview from "./review_submission_form.js";
import ReviewStars from "../ReviewStars/review-stars";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class ReviewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.userEmail = React.createRef(null);
    this.fullName = React.createRef(null);
    this.userDescription = React.createRef(null);
    this.userReviewCount = React.createRef(null);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { reviewComments: props.reviewComments };
  }

  //Takes the name value
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.userEmail.current.value);
    console.log(this.fullName.current.value);
    console.log(this.userDescription.current.value);
    let movieReviewBody = document.getElementById("movieBodyComments");
    let cm = document.createElement("button");

    return movieReviewBody.append(`<div>
      <p class="btn btn-primary">${this.userEmail.current.value}</p>
      <p class="btn btn-primary">${this.fullName.current.value}</p>
      <p class="btn btn-primary">${this.userDescription.current.value}</p>
    </div>`);
  }

  //render defines what the 'component' or html will be rendered to screeen
  render() {
    let reviewComments = [];

    if (this.state.reviewComments) {
      //loops through each of this.state.comments and pushs a JSX Comment into the comments array []
      for (let comment of this.state.reviewComments) {
        reviewComments.push(<MovieReview {...comment} />);
        reviewComments.push(this.userEmail.current.value);
      }
    }
    return (
      <div>
        <ReviewStars />
        <form id="movieReviewForm" onSubmit={this.handleSubmit}>
          <div className="reviewStars"></div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              ref={this.userEmail}
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
              ref={this.fullName}
              name="fullName"
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
            />
          </div>
          <label htmlFor="exampleFormControlTextarea1">
            So how was the movie?
          </label>
          <textarea
            ref={this.userDescription}
            name="movieDescription"
            type="text"
            className="form-control"
            id="textArea"
            placeholder="This movie was the best movie in the world!"
            rows="3"
          ></textarea>
          <br />
          <button
            className="btn btn-primary form-control"
            id="submitContactButton"
            type="submit"
            value="Submit"
          >
            Submit Your Review
          </button>
        </form>
      </div>
    );
  }
}
