import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
