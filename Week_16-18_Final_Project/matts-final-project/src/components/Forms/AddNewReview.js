import React, { useState } from "react";

import { Form, Card } from "react-bootstrap";

import "./AddNewReview.css";
import { commentsAPI } from "../rest/mainAPI";

export const AddNewReview = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    commentsAPI.post([name, product, comment]);
    setName("");
    setProduct("");
    setComment("");
  };

  function handleChange(event) {
    console.log("AddNewReview handleChange name", event.target.name);
    console.log("AddNewReview handleChange value", event.target.value);
    setName(`${event.target.name}: ${event.target.value}`);
  }
  function handle2Change(event) {
    console.log("AddNewReview handle2Change name", event.target.name);
    console.log("AddNewReview handle2Change value", event.target.value);
    setProduct(`${event.target.name}: ${event.target.value}`);
  }
  function handle3Change(event) {
    console.log("AddNewReview handle3Change name", event.target.name);
    console.log("AddNewReview handle3Change value", event.target.value);
    setComment(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <Card
      className="bg-transparent border-0"
      style={{ width: "18rem" }}
      id="addReviewCard"
    >
      <div id="addReviewHeader">
        <div className="addReviewBody">
          <h4>Add A New Review</h4>
          <form onSubmit={onSubmit}>
            <input
              id="reviewNameField"
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={name.name}
            />
            <Form.Select
              id="productReviewDropdown"
              name="product"
              aria-label="Select A Product"
              onChange={handle2Change}
              value={product.product}
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
              <option id="productSelectMenu" value="Kayak 4">
                Kayak 4
              </option>
              <option id="productSelectMenu" value="Kayak 5">
                Kayak 5
              </option>
              <option id="productSelectMenu" value="Kayak 6">
                Kayak 6
              </option>
              <option id="productSelectMenu" value="Kayak 7">
                Kayak 7
              </option>
              <option id="productSelectMenu" value="Kayak 8">
                Kayak 8
              </option>
              <option id="productSelectMenu" value="Kayak 9">
                Kayak 9
              </option>
            </Form.Select>
            <input
              id="reviewCommentBox"
              name="comment"
              placeholder="comment"
              onChange={handle3Change}
              value={comment.comment}
            ></input>
            <br />
            <button id="submitReviewButton" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};
