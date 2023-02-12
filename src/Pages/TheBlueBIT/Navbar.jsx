import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{ background: "#201f24" }}
      className="sticky top-0 py-7 flex justify-between px-10 pl-20 w-full border-b border-slate-100 "
    >
      <div className="text-xl">Logo</div>
      <div className="flex gap-10 ">
        <p className="text-xl cursor-pointer">Timeline</p>
        <a href="#prizes" className="text-xl cursor-pointer">
          Prices
        </a>
        <p className="text-xl cursor-pointer">Rule Book</p>
        <p className="text-xl cursor-pointer">Register Here</p>
      </div>
    </div>
  );
};
