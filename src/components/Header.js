import React from "react";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-cyan-500 to-blue-500 whitespace-normal border border-gray-300 shadow-md sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <TheaterComedyIcon className="mr-4 text-white" fontSize="large" />

          <span className=" text-white font-light text-2xl tracking-widest">
            MOVIES DB
          </span>
        </a>
        <div className=" text-white font-light tracking-widest">
          <a href="https://www.ashwink.net/">AshWink</a>
        </div>
      </div>
    </header>
  );
};
