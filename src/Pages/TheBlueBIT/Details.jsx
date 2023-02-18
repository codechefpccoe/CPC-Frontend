import React from "react";
import image from "./Assests/code_updated.png";

export const Details = () => {
  return (
    <div className="lg:mt-16 pb-[2rem] md:mx-20">
      <div className="text-3xl text-center">DETAILS</div>
      <div className="flex lg:flex-row flex-col w-full justify-center lg:space-x-8 p-4 items-center">
        <div className="flex-1">
          <img
            // style={{ width: "40vw" }}
            className=""
            src={image}
            alt="Group"
          ></img>
        </div>
        <div className="lg:flex-1 w-full">
          <div className="text-xl p-5 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-600 w-full space-y-4">
            {/* <div className="text-sky-400">
              <li>Registration Fee:</li>
              <li>Registration Link:</li>
              <li>Members in Each Group:</li>
              <li>Platform:</li>
            </div>
            <div className="text-center">
              <div> FREE </div>
              <div> Coming soon</div>
              <div> 3-4 </div>
              <div>Devfolio</div>
            </div> */}
            <div className="flex justify-between">
              <p className="text-sky-400">Registration Fee:</p>
              <p> FREE </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sky-400">Registration Link:</p>
              <p> Coming soon</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sky-400">Members in Each Group:</p>
              <p> 3-4 </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sky-400">Platform:</p>
              <p>Devfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
