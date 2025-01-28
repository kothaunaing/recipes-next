import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <h1 className="text-lg">
        Welcome to the <span className="font-bold">Recipes</span> App
      </h1>
      <Link href={"/explore"} className="hover:underline text-blue-700">
        Explore
      </Link>
    </div>
  );
}
