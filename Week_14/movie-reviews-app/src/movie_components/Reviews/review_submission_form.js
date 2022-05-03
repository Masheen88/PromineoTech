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
    };
  }

  //Handles changes from the form.
  handleChange(event) {
    event.preventDefault();
    let reviewComments = this.state.reviewComments;
    let name = event.target.name;
    let value = event.target.value;
    // reviewComments[name] = value;
    reviewComments.push(value);

    this.setState({ reviewComments });
  }

  //On submit passes data to render.
  handleSubmit(event) {
    console.log("handleSUbmit-event:", event);
    event.preventDefault();
    console.log("handleSubmit-reviewcomments:", this.state.reviewComments);
    let reviews = this.state.reviewComments;
    reviews.push("Test");
  }

  //render defines what the 'component' or html will be rendered to screeen
  render() {
    return (
      <div>
        {/* <ReviewStars /> */}
        <form id="movieReviewForm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="reviewStars"></div>
          {/* <div className="form-group">
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
          </div> */}
          <div className="form-group">
            <label htmlFor="fullNameInput">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
              value={this.state.reviewComments["fullName"]}
              onBlur={this.handleChange.bind(this)}
              // onChange={this.handleReviewName}
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
            onBlur={this.handleChange.bind(this)}
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
          {/* {
            //map array data
            this.state.reviewComments.map(function (val) {
              console.log("from mapping - val:", val);
              console.log("from mapping", this.state.reviewComments);
              return <div key={val.name}>{val.name}</div>;
            })
          } */}
        </div>
      </div>
    );
  }
}
