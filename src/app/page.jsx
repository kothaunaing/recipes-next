import Recipes from "@/components/Recipes";
import React from "react";
import { getRecipes } from "../server-functions/getRecipes";
import Header from "../components/Header";

const Explore = async () => {
  try {
    const recipes = await getRecipes("https://dummyjson.com/recipes");

    return (
      <div>
        <Header />
        <Recipes recipes={recipes} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Explore;
