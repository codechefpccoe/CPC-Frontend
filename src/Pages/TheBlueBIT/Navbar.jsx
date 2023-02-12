import React from "react";
import Link from "react-scroll";
import Logo from "./Assests/logo.png";

export const Navbar = () => {
  document.title = "The BlueBIT | Home";

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-10 py-5 flex justify-between items-center px-10 pl-20 w-full border-b border-gray-100 ">
      <img className = "w-[70px]" src={Logo}></img>
      {/* <div className="flex gap-10 ">
        <div
          onClick={() => handleClickScroll("timeline")}
          className="text-xl cursor-pointer"
        >
          Timeline
        </div>
        <div
          onClick={() => handleClickScroll("prizes")}
          className="text-xl cursor-pointer"
        >
          Prices
        </div>
        <p className="text-xl cursor-pointer">Rule Book</p>
        <div className="text-xl cursor-pointer">Register Now</div>
      </div> */}
    </div>
  );
};
