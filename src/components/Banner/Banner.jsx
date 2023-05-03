/* import React from "react";
import Slider from "../Home/Slider";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mx-auto relative overflow-hidden"
      style={{
        backgroundImage: `url("http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg")`,
        animation: `slidein 10s linear infinite`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-5xl text-2xl text-[#D54215] font-bold">
            <Slider />
          </h1>
          <p className="mb-5 lg:text-black text-white font-bold text-xl lg:text-4xl">
            no matter how you cook, Bangla Table has many the recipes
          </p>
          <p className="mb-5 text-[#5E5E5D]">
            Discover the authentic taste of Bangladesh with Bangla Table's
            diverse collection of recipes, perfected over generations.
          </p>
          <button className="btn-main">Explore recipes</button>
        </div>
      </div>
      <style jsx>{`
        @keyframes slidein {
          0% {
            background-position: center;
          }
          50% {
            background-position: top;
          }
          100% {
            background-position: center;
          }
        }
        
        }
      `}</style>
    </div>
  );
};

export default Banner;
 */
import React from "react";
import Slider from "../Home/Slider";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mx-auto relative overflow-hidden"
      style={{
        backgroundImage: `url("http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg")`,
        animation: `slidein 10s linear infinite`,
      }}
    >
      <div className="bg-white bg-opacity-60 absolute inset-0"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-5xl text-2xl text-[#D54215] font-bold">
            <Slider />
          </h1>
          <p className="mb-5 text-black  font-bold text-xl lg:text-4xl">
            no matter how you cook, Bangla Table has many the recipes
          </p>
          <p className="mb-5 text-[#5E5E5D] font-semibold">
            Discover the authentic taste of Bangladesh with Bangla Table's
            diverse collection of recipes, perfected over generations.
          </p>
          <button className="btn-main">Explore recipes</button>
        </div>
      </div>
      <style jsx>{`
        @keyframes slidein {
          0% {
            background-position: center;
          }
          50% {
            background-position: top;
          }
          100% {
            background-position: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
