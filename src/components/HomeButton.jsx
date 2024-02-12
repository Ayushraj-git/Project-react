import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";


const HomeButton = () => {
  return (
    <a href="/" >
      <HomeIcon className="h-8 w-8 m-8 text-stone-50 hover:text-red-300 hover:scale-110 transition-all delay-150 ease-in-out"/>
    </a>
  );
};

export default HomeButton;
