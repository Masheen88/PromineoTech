import logo from "./logo.svg";
import "./App.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/navbar/navbar";
import Home from "./components/mainPages/homePage";

function App() {
  return (
    <div className="App">
      <Navibar />
    </div>
  );
}

export default App;
