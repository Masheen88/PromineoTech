// Unused Testing File
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { commentsAPI } from "../rest/mainAPI";

export const EditReviewForm = () => {
  const [newComment, setNewComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    commentsAPI.apiEdit([newComment]);
    setNewComment("");
  };

  function handleChange(event) {
    console.log("AddNewReview handle3Change name", event.target.name);
    console.log("AddNewReview handle3Change value", event.target.value);
    setNewComment(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <div className="editReviewBody">
      <h3>Edit a Review</h3>
      <form onSubmit={onSubmit}>
        <input
          id="reviewCommentBox"
          name="comment"
          placeholder="comment"
          onChange={handleChange}
          value={newComment.comment}
        ></input>
        &nbsp;
        <Button variant="success" type="submit">
          Edit Review
        </Button>
      </form>
    </div>
  );
};
