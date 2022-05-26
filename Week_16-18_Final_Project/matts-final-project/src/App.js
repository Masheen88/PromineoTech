import "./App.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Footer />
    </div>
  );
}

export default App;
