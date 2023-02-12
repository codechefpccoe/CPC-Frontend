import React from "react";
import masscot from "../Images/masscot.jpg";
import { useSelector } from "react-redux";

export const Loader = () => {
  const loader = useSelector((state) => state.loader.loader);

  return (
    <>
      {loader && (
        <div className="absolute top-0 z-50 bg-white w-screen h-screen flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <img className="animate-bounce h-[100px]" src={masscot}></img>
            <p className="font-bold ">{loader}</p>
          </div>
        </div>
      )}
    </>
  );
};
