import React, { useState, useEffect } from "react";

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

import { commentsAPI } from "../rest/mainAPI";

import "./reviews.css";

import { AddNewReview } from "../Forms/AddNewReview";
import ReviewsList from "../Forms/reviewForm";
import { EditHouseForm } from "../Forms/EditHouseForm";

import Road from "../images/reviews_icon.svg";

function Reviews() {
  const [reviewData, setAPIData] = useState([]);

  useEffect(() => {
    commentsAPI
      .get("https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/comments")
      .then((response) => {
        console.log("reviews useEffect", response);
        setAPIData(response);
      });
  }, []);

  const deleteReview = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const deleteButtonId = e.target.value;
    commentsAPI.apiDelete(deleteButtonId).then((response) => {
      console.log("reviews deleteReview", response);
      setAPIData(response);
    });
  };

  // const fetchComments = async () => {
  //   const comments = await commentsAPI.get();
  //   this.setState({ comments });
  //   console.log("fetch API Test", comments);
  // };

  // const updateComment = async (updatedComment) => {
  //   console.log(updatedComment);
  //   await commentsAPI.put(updatedComment);
  //   //Updates the state after the current houses have been updated.
  //   fetchComments();
  // };

  const displayForm = () => {
    console.log("inside displayForm method");
    return (
      <div>
        <EditHouseForm />
      </div>
    );
  };

  return (
    <div className="homePage">
      <div className="reviewsTitle">
        Hope you had fun on your adventure, tell us how we did!
      </div>
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
            <br />
            {reviewData.reverse().map((data, index) => {
              return (
                <Container id="reviewContainer" key={index}>
                  <Row>
                    <Col id="reviewColumns">
                      <div>{data.name}</div>
                    </Col>
                    <Col id="reviewColumns">
                      <div>{data.product}</div>
                    </Col>
                    <Col id="reviewColumns">
                      <Button className="btn btn-info" onClick={displayForm}>
                        Edit
                      </Button>
                      <Button
                        className="btn btn-danger"
                        onClick={deleteReview}
                        value={data._id}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col id="reviewColumns">
                      <div>{data.comment}</div>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
