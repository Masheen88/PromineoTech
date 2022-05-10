import React from "react";
import ReactDOM from "react-dom/client";
import "./custom_styles.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "@popperjs/core";
import MovieReviews from "./movie_components/Reviews/movie_reviews_main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MovieReviews />);

reportWebVitals();
