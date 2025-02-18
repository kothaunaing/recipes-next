import { StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Recipes = ({ recipes }) => {
  try {
    return (
      <div className="">
        <div className="grid justify-center gap-2 max-w-3xl mx-auto p-2">
          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.name}
                className="shadow-md rounded-md group hover:shadow-lg  overflow-hidden"
              >
                <div className="grid justify-center relative h-[150px] z-0">
                  <Link className="z-0" href={`/explore/${recipe.id}`}>
                    <img
                      src={recipe.image}
                      className="group-hover:scale-110 transition-[transform] duration-150 h-full w-full  object-cover object-center z-0"
                    />
                  </Link>
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
                    {recipe.tags.map((tag) => {
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
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div className="text-center">Error fetching data</div>;
  }
};

export default Recipes;
