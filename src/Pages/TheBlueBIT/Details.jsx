import React from "react";
import image from "./Assests/code.png";

export const Details = () => {
  return (
    <div>
      <div className=" mb-6 mt-24 text-3xl text-center">DETAILS</div>
      <div className="flex w-full justify-center gap-20">
        <div>
          <img
            style={{ width: "40vw" }}
            className="relative -top-20"
            src={image}
          ></img>
        </div>
        <div className="flex items-center h-90vh">
          <div className="text-2xl flex gap-5">
            <div className="text-sky-400">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
