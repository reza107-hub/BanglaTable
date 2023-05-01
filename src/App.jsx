import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="mt-2">
      <Navbar></Navbar>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
