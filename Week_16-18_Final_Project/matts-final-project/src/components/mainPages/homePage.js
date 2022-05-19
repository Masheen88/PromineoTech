import React from "react";
import { AddNewReview } from "../Forms/AddNewReview";
import "./homePage.css";

function HomePage() {
  return (
    <div className="homePage">
      Welcome Home
      <div>
        <AddNewReview />
      </div>
    </div>
  );
}

export default HomePage;
