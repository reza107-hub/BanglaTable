import React from "react";
import { FaHeart } from "react-icons/fa";

const ChefCard = ({ chef }) => {
  return (
    <div className="card lg:w-96 border hover:border-[#D74C22] border-solid pt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
      <figure className="px-10 pt-10 h-60">
        <img src={chef.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#D74C22]">{chef.name}</h2>
        <div className="text-[#4A4A4A] flex flex-col gap-3">
          <p className="badge border-[#D74C22] badge-outline">
            Experience: {chef.experience} years
          </p>
          <p className="badge border-[#D74C22] badge-outline">
            Recipes: {chef.recipes}
          </p>
          <p className="flex items-center justify-center gap-2 badge border-[#D74C22] badge-outline">
            {chef.likes} <FaHeart />
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn-main">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
