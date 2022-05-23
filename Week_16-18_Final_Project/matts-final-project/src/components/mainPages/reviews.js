import React from "react";

import { commentsAPI } from "../rest/mainAPI";
import "./reviews.css";

import { AddNewReview } from "../Forms/AddNewReview";
import ReviewsList from "../Forms/reviewForm";
import Road from "../images/reviews_icon.svg";

function Reviews() {
  const state = {
    comments: [],
  };

  const fetchComments = async () => {
    const comments = await commentsAPI.get();
    this.setState({ comments });
    console.log("fetch API Test", comments);
  };

  const updateComment = async (updatedComment) => {
    console.log(updatedComment);
    await commentsAPI.put(updatedComment);
    //Updates the state after the current houses have been updated.
    fetchComments();
  };

  return (
    <div className="homePage">
      Reviews!!!
      <div>
        <AddNewReview />
        <br />
        <div>
          <div className="container reviewContainer">
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
          </div>
          <br />
          <div className="reviews-list">
            <h1 id="commentsTitle">Reviews</h1>
          </div>
          <br />
          <div className="reviewBbody">
            Reviews Area Test
            <br /> This is where the reviews will go
            <br />
            {state.comments.map((comment) => (
              <div id="myComments">Test {updateComment(comment)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
