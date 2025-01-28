import axios from "axios";
import { ArrowLeftIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface Params {
  [key: string]: string | undefined;
}

interface RecipeDetailsProps {
  searchParams: SearchParams;
  params: Params;
}

async function getRecipe(recipeId: string | undefined) {
  const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);

  return response.data;
}

export async function generateMetadata({ params }: RecipeDetailsProps) {
  const { recipeId } = params;
  const recipe = await getRecipe(recipeId);

  return {
    title: `${recipe.name}`,
    description: recipe.name,
  };
}

const RecipeDetails = async ({ params }: RecipeDetailsProps) => {
  try {
    const { recipeId } = params;
    const recipe = await getRecipe(recipeId);

    return (
      <div className=" ">
        <div className="sticky flex items-center gap-1 top-0 right-0 left-0 z-40 bg-white p-2">
          <Link href={"/explore"}>
            <ArrowLeftIcon />
          </Link>
          <h1 className=" font-bold text-2xl text-blue-700 text-center">
            {recipe.name}
          </h1>
        </div>
        <div className="p-6 max-w-3xl mx-auto">
          <div
            key={recipe.name}
            className="shadow-md rounded-md group hover:shadow-lg  overflow-hidden grid "
          >
            <div className="grid justify-center relative h-[150px] z-0">
              <img
                src={recipe.image}
                className="group-hover:scale-110 transition-[transform] duration-150 h-full w-full  object-cover object-center z-0"
              />

              <p className="absolute top-1 right-1 bg-slate-600/70 text-white p-1 rounded-lg font-bold text-sm">
                {recipe.difficulty}
              </p>
            </div>

            <div className="p-2 bg-white/60 z-10 relative">
              <p>{recipe.name}</p>
              <p className="bg-green-400 max-w-fit p-1 rounded-md text-sm text-white font-bold">
                {recipe.cuisine}
              </p>
              <p className="flex items-center gap-1 mt-1">
                <StarIcon className="size-5" /> {recipe.rating}
              </p>
              <div>
                {recipe.tags.map((tag: string) => {
                  return (
                    <Link
                      href={`/explore/tags/${tag}`}
                      key={`recipe-${recipe.name}-${tag}`}
                      className="hover:underline mr-1 text-blue-600"
                    >
                      #{tag}
                    </Link>
                  );
                })}
              </div>
              <p className="mt-2 text-sm font-bold">
                {recipe.reviewCount} reviews
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-xl text-blue-500">Ingredients</h1>
            <ul className="list-disc">
              {recipe.ingredients.map((ingredient: string, index: number) => {
                return <li key={ingredient + index}>{ingredient}</li>;
              })}
            </ul>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-xl text-blue-500">Instructions</h1>
            <ol className="list-decimal">
              {recipe.instructions.map((instruction: string, index: number) => {
                return <li key={instruction + index}>{instruction}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default RecipeDetails;
