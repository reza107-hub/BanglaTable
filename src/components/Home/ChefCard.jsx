import React from "react";
import { FaArrowRight, FaHeart, FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  return (
    <div className="card lg:w-96 border hover:border-[#D74C22] border-solid pt-5 ">
      <figure className="px-10 pt-10 h-60">
        <LazyLoad offset={300}>
          <img src={chef.image} alt="" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#D74C22]">{chef.name}</h2>

        <div className="text-[#4A4A4A] flex flex-col gap-3">
          <p className="">Experience: {chef.experience} years</p>
          <p className="">Number of Recipes: {chef.recipes}</p>
          <p className="flex items-center justify-center gap-2 badge border-[#D74C22] badge-outline">
            {chef.likes} <FaThumbsUp className="text-blue-400" />
          </p>
        </div>
        <div className="divider"></div>
        <div className="card-actions justify-end">
          <Link to={`/chef/${chef.chef_id}`}>
            <button className="btn-second flex items-center gap-3">
              View Recipes
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
