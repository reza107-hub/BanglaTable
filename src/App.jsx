import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="mt-2">
      <Navbar></Navbar>
      <div className="my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
