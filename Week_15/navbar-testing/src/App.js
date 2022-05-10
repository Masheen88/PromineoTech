import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="pageContainer">
      <div className="container-fluid navigationBar">
        <Navbar />
      </div>
      <div className="container movieReviewsContainer"></div>
    </div>
  );
}

export default App;
