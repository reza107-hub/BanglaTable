import React from "react";
import { FaArrowRight, FaHeart, FaThumbsUp } from "react-icons/fa";

const ChefCard = ({ chef }) => {
  return (
    <div className="card lg:w-96 border hover:border-[#D74C22] border-solid pt-5 ">
      <figure className="px-10 pt-10 h-60">
        <img src={chef.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#D74C22]">{chef.name}</h2>

        <div className="text-[#4A4A4A] flex flex-col gap-3">
          <p className="">Experience: {chef.experience} years</p>
          <p className="">Number of Recipes: {chef.recipes}</p>
          <p className="flex items-center justify-center gap-2 badge border-[#D74C22] badge-outline">
            {chef.likes} <FaThumbsUp className="text-blue-700" />
          </p>
        </div>
        <div className="divider"></div>
        <div className="card-actions justify-end">
          <button className="btn-main flex items-center gap-3">View Recipes <FaArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
