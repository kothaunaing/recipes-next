import Recipes from "@/components/Recipes";
import axios from "axios";
import React from "react";

export async function generateMetadata({ params }) {
  const { tag } = params;

  return {
    title: `Explore by Tag - ${tag}`,
    description: tag,
  };
}

const Tag = async ({ params }) => {
  const { tag } = params;

  const response = await axios.get(`https://dummyjson.com/recipes/tag/${tag}`);
  const data = response.data;
  const recipes = data.recipes;

  console.log(recipes);

  return <Recipes recipes={recipes} />;
};

export default Tag;
