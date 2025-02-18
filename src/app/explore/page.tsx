import Header from "@/components/Header";
import Recipes from "@/components/Recipes";
import axios from "axios";
import React from "react";

const Explore = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/recipes");
    const data = response.data;
    const recipes = data.recipes;

    return (
      <div>
        <Header backButton={true} />
        <Recipes recipes={recipes} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Explore;
