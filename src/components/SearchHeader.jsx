"use client";

import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams.get("q")]);

  return (
    <div className="sticky flex items-center gap-1 top-0 right-0 left-0 z-40 bg-white p-2 justify-between shadow-md">
      <div className="flex items-center gap-1">
        <Link href={"/"}>
          <ArrowLeftIcon />
        </Link>
        <h1 className=" font-bold text-2xl text-blue-700 text-center">
          Search
        </h1>
      </div>
      <div className="flex items-center  border p-1 border-slate-400 rounded-md">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="outline-none border-none p-1 h-full"
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
