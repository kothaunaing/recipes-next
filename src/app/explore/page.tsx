import Recipes from "@/components/Recipes";
import axios from "axios";
import { ArrowLeftIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Explore = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/recipes");
    const data = response.data;
    const recipes = data.recipes;

    return <Recipes recipes={recipes} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Explore;
