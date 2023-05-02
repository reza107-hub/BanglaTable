import React from "react";
import Slider from "./Slider";

const Home = () => {
  return (
    <div
      className="hero  min-h-[80vh] mx-auto "
      style={{
        backgroundImage: `url("http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-[#D54215] font-bold">
            <Slider />
          </h1>
          <p className="mb-5 text-black font-bold text-4xl">
            no matter how you cook, Bangla Table has many the recipes
          </p>
          <button className="btn-main">Explore recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
