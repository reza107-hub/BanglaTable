
import React, { useEffect, useState } from "react";
import Slider from "../Home/Slider";

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerImages = [
    "http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg",
    "http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/flat-lay-with-takeaway-food-on-wooden-background-food-delivery.jpg",
    "http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/chinese-food-white-background.jpg",
    "http://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change the image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="hero min-h-[80vh] mx-auto relative overflow-hidden"
      style={{
        backgroundImage: `url("${bannerImages[bannerIndex]}")`,
        animation: `slidein 15s linear infinite`,
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
