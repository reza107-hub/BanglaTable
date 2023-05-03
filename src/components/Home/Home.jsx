import React, { useEffect, useState } from "react";

import Banner from "../Banner/Banner";
import ChefCard from "./ChefCard";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="mt-28">
        <p className="text-5xl font-bold text-center">Chef Spotlight</p>
        <div className="grid lg:grid-cols-3 p-2 mx-auto gap-20 mt-10 w-[95%]  lg:w-[80%]">
          {data.map((chef) => (
            <ChefCard key={chef.chef_id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
