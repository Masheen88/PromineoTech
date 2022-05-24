import React, { useState } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

import "./AddNewReview.css";
import { commentsAPI } from "../rest/mainAPI";

export const AddNewReview = () => {
  const [reviewData, setReviewData] = useState({});
  const newReviewData = {
    name: reviewData.name,
    product: reviewData.product,
    comment: reviewData.comment,
  };
  const onSubmit = (event) => {
    console.log("onSubmit event", event);
    console.log("onSubmit event value:", event.target.value);
    event.preventDefault();
    console.log("onSubmit reviewData:", reviewData);
    commentsAPI.post(reviewData);
    setReviewData("");
  };

  return (
    <div>
      <div className="addReviewBody">
        <h4>Add a new review</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setReviewData(event)}
            value={newReviewData.name}
          />
          <Form.Select
            id="productReviewDropdown"
            aria-label="Select A Product"
            onChange={(event) => setReviewData(event.target.value)}
            value={newReviewData.product}
          >
            <option id="selectAProduct" value="Select A Product">
              Select A Product
            </option>
            <option id="productSelectMenu" value="Kayak 1">
              Kayak 1
            </option>
            <option id="productSelectMenu" value="Kayak 2">
              Kayak 2
            </option>
            <option id="productSelectMenu" value="Kayak 3">
              Kayak 3
            </option>
          </Form.Select>
          <textarea
            defaultValue="comment"
            id="reviewCommentBox"
            placeholder="comment"
            onChange={(event) => setReviewData(event.target.value)}
            value={newReviewData.comment}
          ></textarea>
          <br />
          <button id="submitReviewButton" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
