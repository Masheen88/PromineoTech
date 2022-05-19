import React from "react";

import { commentsAPI } from "../rest/mainAPI";
import "./homePage.css";
import "./reviews.css";

import { AddNewReview } from "../Forms/AddNewReview";
import { House } from "../Sub-Components/House";

import Road from "../images/reviews_icon.svg";

function Reviews() {
  const fetchHouses = async () => {
    const houses = await commentsAPI.get();
    this.setState({ houses });
  };

  const updateHouse = async (updatedHouse) => {
    await commentsAPI.put(updatedHouse);
    //Updates the state after the current houses have been updated.
    this.fetchHouses();
  };

  let state = {
    houses: [],
  };

  return (
    <div className="homePage">
      Reviews!!!
      <div>
        <AddNewReview />
        <br />
        <div>
          <div className="container">
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
            <img id="reviewsMainImage" src={Road} />
          </div>
          <br />
          <div className="house-list">
            <h1 id="commentsTitle">Comments</h1>
          </div>
          <br />
          <div className="houseBody">
            Just Testing
            {state.houses.map((house) => (
              <House
                house={house}
                key={house._id}
                updateHouse={(e) => updateHouse(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
