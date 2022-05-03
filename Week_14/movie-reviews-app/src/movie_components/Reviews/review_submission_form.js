import React from "react";
import MovieReview from "./review_submission_form.js";
import ReviewStars from "../ReviewStars/review-stars";

//makes the class accessible outside the file.
//React.Componenet comes with the class and extends to create the compoenets you may work with
export default class ReviewSubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewComments: [],
      id: "",
      currentDateTime: Date().toLocaleString(),
    };
  }

  //On submit passes form data to render.
  handleSubmit(event) {
    console.log("handleSUbmit-event:", event);
    event.preventDefault();
    let reviewComments = this.state.reviewComments;
    console.log(
      "index 0) handleSubmit email:",
      event.target.elements.email.value
    );
    let email = event.target.elements.email.value;
    console.log(
      "index 1) handleSubmit fullName:",
      event.target.elements.fullName.value
    );
    let fullName = event.target.elements.fullName.value;
    console.log(
      "index 2) handleSubmit movieDescription:",
      event.target.elements.movieDescription.value
    );
    let movieDescription = event.target.elements.movieDescription.value;

    let i = parseInt(this.state.reviewComments.length + 1);
    console.log("index 3) id =:", i);

    let date = this.state.currentDateTime;
    console.log("index 4) date =:", date);

    console.log("handleSubmit-reviewcomments:", this.state.reviewComments);

    let reviews = this.state.reviewComments;
    reviewComments.push([fullName, movieDescription, email, i + 1, date]);
    this.setState({ reviewComments });
  }

  //render defines what the 'component' or html will be rendered to screeen
  render() {
    return (
      <div>
        {/* <ReviewStars /> */}
        <form id="movieReviewForm" onSubmit={this.handleSubmit.bind(this)}>
          <div name="todaysDate" value={this.state.currentDateTime}>
            {this.state.currentDateTime["todaysDate"]}
          </div>
          <div name="reviewStars" className="reviewStars" value="">
            {/* <ReviewStars /> */}
          </div>
          <div className="form-group">
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
          <br />
          <button
            className="btn btn-primary form-control"
            id="submitContactButton"
            value="Submit"
          >
            Submit Your Review
          </button>
        </form>

        <div className="reviewsList">
          Insert your test comments header
          <br />
          More Text
          <div>
            {
              //map array data
              this.state.reviewComments.reverse().map(function (val) {
                console.log("from mapping - val:", val);
                return (
                  <div className="card w-75" key={val[3]}>
                    <div className="card-header bg-primary text-white">
                      <div className="row reviewCommentHeader">
                        <div className="col-sm-6 reviewName">{val[0]}</div>
                        <div className="col-sm-6 reviewRatings">
                          <ReviewStars />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">{val[1]}</div>
                    <div className="card-footer">{val[4]}</div>
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
