import React from "react";
import SearchHeader from "../../components/SearchHeader";
import { getRecipes } from "../../server-functions/getRecipes";
import Recipes from "../../components/Recipes";

export async function generateMetadata({ searchParams }) {
  const { q } = searchParams;

  return {
    title: q ? `Search Recipe | ${q}` : "Search Recipe",
    description: q ? `Search Recipe | ${q}` : "Search Recipe",
  };
}

const Search = async ({ searchParams }) => {
  try {
    const { q } = searchParams;

    const recipes = await getRecipes(
      `https://dummyjson.com/recipes/search?q=${q}`
    );

    return (
      <div>
        <SearchHeader />
        {q ? (
          <Recipes recipes={recipes} />
        ) : (
          <div className="text-center mt-4">Search something...</div>
        )}
      </div>
    );
  } catch (error) {
    console.log("Error in Search Page: " + error.message);
    return <div className="text-center">Error Fetching data</div>;
  }
};

export default Search;
