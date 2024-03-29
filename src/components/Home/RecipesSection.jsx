import React, { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";

const RecipesSection = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://servcer-reza107-hub.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="lg:w-[900px] w-[90%] mt-10 mx-auto grid grid-cols-2 gap-x-2 lg:grid-cols-4 gap-y-10">
      {recipes.map((recipe) => (
        <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>
      ))}
    </div>
  );
};

export default RecipesSection;
