import React from "react";
import Link from "react-scroll";

export const Navbar = () => {
  document.title = "The BlueBIT | Home";

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ background: "#201f24" }}
      className="sticky z-10 top-0 py-5 flex justify-between px-10 pl-20 w-full border-b border-slate-100 "
    >
      <div className="text-xl">Logo</div>
      <div className="flex gap-10 ">
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
        {/* <div className="text-xl cursor-pointer">Register Now</div> */}
      </div>
    </div>
  );
};
