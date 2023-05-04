import React from "react";

const SingleRecipe = ({ recipe }) => {
  return (
    <div className="card p-3 lg:w-52 border rounded-none border-[#D74C22] border-solid ">
      <figure className="h-28">
        <img src={recipe.image} alt="" />
      </figure>
      <div className="card-body pt-3 pl-0 pe-0 pb-0">
        <h2 className="card-title text-lg text-[#D74C22]">{recipe.name}</h2>
        <div className="text-[#4A4A4A] text-sm">
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
