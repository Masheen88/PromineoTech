import React, { useState } from "react";
import "./AddNewReview.css";
import { commentsAPI } from "../rest/mainAPI";

export const AddNewReview = (props) => {
  const [houseName, setName] = useState("");

  const onSubmit = (event) => {
    console.log("onSubmit event:", event);
    event.preventDefault();
    console.log("onSubmit housename:", houseName);
    commentsAPI.post(houseName);
    setName("");
  };

  return (
    <div>
      <div className="houseBody">
        <h4>Add a new review</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            value={houseName}
          />

          <button id="submitReviewButton" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
