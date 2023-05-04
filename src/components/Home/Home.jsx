import React, { useEffect, useState } from "react";

import Banner from "../Banner/Banner";
import ChefCard from "./ChefCard";
import RecipesSection from "./RecipesSection";
import JoinUs from "./JoinUs";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://servcer-reza107-hub.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="mt-28">
        <p className="lg:text-5xl text-2xl font-bold text-center">
          Chef Spotlight
        </p>
        <div className="grid lg:grid-cols-3 p-2 mx-auto gap-20 mt-10  lg:w-[80%]">
          {data.map((chef) => (
            <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
          ))}
        </div>
        <div className="mt-28">
          <p className="lg:text-5xl text-2xl font-bold text-center">
            Featured Recipes
          </p>
          <RecipesSection></RecipesSection>
        </div>
        <div className="my-28">
          <JoinUs></JoinUs>
        </div>
      </div>
    </>
  );
};

export default Home;
