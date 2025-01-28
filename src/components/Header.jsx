import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({ backButton = false }) => {
  return (
    <div className="sticky flex items-center gap-1 top-0 right-0 left-0 z-40 bg-white p-2 justify-between shadow-md">
      <div className="flex gap-1 items-center">
        {backButton && (
          <Link href={"/"}>
            <ArrowLeftIcon />
          </Link>
        )}
        <h1 className=" font-bold text-2xl text-blue-700 text-center">
          Explore Recipes
        </h1>
      </div>
      <Link href={"/search"}>
        <SearchIcon />
      </Link>
    </div>
  );
};

export default Header;
