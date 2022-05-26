import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import { commentsAPI } from "../rest/mainAPI";

import "./reviews.css";

import reviewBadge from "../images/reviews_icon.svg";
import videoBg from "../videos/review-water.mp4";

import { AddNewReview } from "../Forms/AddNewReview";

//users
import user1 from "../images/users/darcy.jpg";

//product images
import img1 from "../images/product_images/1.png";
import img2 from "../images/product_images/2.jpg";
import img3 from "../images/product_images/3.jpg";
import img4 from "../images/product_images/4.jpg";
import img5 from "../images/product_images/5.jpeg";
import img6 from "../images/product_images/6.jpg";
import img7 from "../images/product_images/7.jpg";
import img8 from "../images/product_images/8.jpeg";
import img9 from "../images/product_images/9.jpg";

function Reviews() {
  const [reviewData, setAPIData] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [reviewProductId, setReviewProductId] = useState("");

  const deleteReview = async (event) => {
    event.preventDefault();
    const deleteButtonId = event.target.value;
    commentsAPI.apiDelete(deleteButtonId).then((response) => {
      setAPIData([response]);
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    commentsAPI.apiEdit([reviewProductId], [newComment]);
    setNewComment("");
    setReviewProductId("");
  };

  function handleChange(event) {
    console.log("reviews handleChange event:", event);
    console.log("reviews handleChange name:", event.target.name);
    console.log("reviews onSubmit id:", event.target.classList.value);
    console.log("reviews handleChange value:", event.target.value);
    setNewComment(`${event.target.name}: ${event.target.value}`);
    setReviewProductId(`_id: ${event.target.classList.value}`);
  }

  useEffect(() => {
    commentsAPI
      .get("https://6283f68ba48bd3c40b6933a7.mockapi.io/api/v1/comments")
      .then((response) => {
        setAPIData(response);
      });
  }, []);

  return (
    <div className="reviewPage">
      <div className="reviewsTitle">
        Hope you had fun on your adventure, tell us how we did!
      </div>

      <div>
        <AddNewReview />
        <br />
        <div id="reviewsSectionHeader">
          <div className="container reviewContainer">
            <img id="reviewsMainImage" alt="" src={reviewBadge} />
            <img id="reviewsMainImage" alt="" src={reviewBadge} />
            <img id="reviewsMainImage" alt="" src={reviewBadge} />
            <img id="reviewsMainImage" alt="" src={reviewBadge} />
          </div>
          <br />
          <div className="reviews-list">
            <h1 id="commentsTitle">Reviews</h1>
          </div>
          <br />
          <div className="reviewBody">
            {[...reviewData].reverse().map((data, index) => {
              return (
                <Container id="reviewContainer" key={index}>
                  <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}></Col>
                    <Col xs={2} id="reviewColumns reviewDataName">
                      <div id="reviewUserHeader">
                        {data.name.slice(6)}
                        <br />
                        <img id="reviewUserImage" alt="" src={user1} />
                      </div>
                    </Col>
                    <Col xs={2} id="reviewColumns reviewDataProduct">
                      <div>{data.product.slice(8)}</div>
                      <div>
                        {(() => {
                          if (data.product === `product: Kayak 1`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img1} />
                            );
                          } else if (data.product === `product: Kayak 2`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img2} />
                            );
                          } else if (data.product === `product: Kayak 3`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img3} />
                            );
                          } else if (data.product === `product: Kayak 4`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img4} />
                            );
                          } else if (data.product === `product: Kayak 5`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img5} />
                            );
                          } else if (data.product === `product: Kayak 6`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img6} />
                            );
                          } else if (data.product === `product: Kayak 7`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img7} />
                            );
                          } else if (data.product === `product: Kayak 8`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img8} />
                            );
                          } else if (data.product === `product: Kayak 9`) {
                            return (
                              <img id="reviewProductImage" alt="" src={img9} />
                            );
                          } else {
                            <p>Error!!!</p>;
                          }
                        })()}
                      </div>
                    </Col>
                    <Col xs={2} id="reviewActionButtons">
                      <div className="editButtonTitle">
                        {showEditForm ? (
                          <div className="editReviewBody">
                            <h3>Edit Existing Review</h3>
                            <form onSubmit={onSubmit}>
                              <input
                                className={data._id}
                                id="reviewCommentBox"
                                name="comment"
                                placeholder="comment"
                                onChange={handleChange}
                                value={newComment.comment}
                              ></input>
                              &nbsp;
                              <Button variant="success" type="submit">
                                Submit New Review
                              </Button>
                            </form>
                          </div>
                        ) : null}
                      </div>
                      <br />
                      <br />
                      <Button
                        className="btn btn-danger"
                        onClick={deleteReview}
                        value={data._id}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={1}></Col>
                  </Row>
                  <Row>
                    <Col xs={4}></Col>
                    <Col xs={4} id="reviewColumns">
                      <div id="reviewDataComment">
                        {data.comment.slice(9)}{" "}
                        <span>
                          {" "}
                          <Button
                            className="btn btn-info"
                            onClick={() => setShowEditForm(true)}
                          >
                            Edit Review
                          </Button>
                        </span>
                      </div>
                    </Col>
                    <Col xs={4}></Col>
                  </Row>
                </Container>
              );
            })}
          </div>
        </div>
      </div>
      <div className="reviewPage video_bg">
        <video
          loop
          muted
          autoPlay
          disablePictureInPicture
          id="reviewPage__video"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Reviews;
