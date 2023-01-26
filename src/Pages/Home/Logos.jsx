import React, { useState } from "react";
import logo from "../../Images/logo.png";
import codechefLogo from "../../Images/codechef.png";

const Logos = () => {
  const [hoverClass, setIsHoverClass] = useState("");
  const parentClass = `parent_logo ${hoverClass}`;

  const hoverInHandler = () => {
    setIsHoverClass("hover");
  };

  const hoverOutHandler = () => {
    setIsHoverClass("");
  };

  return (
    <div
      className="group wrapper absolute block min-h-min min-w-min"
      onMouseOver={hoverInHandler}
      onMouseOut={hoverOutHandler}
    >
      <div className="flex items-center gap-14 rotate_animation">
        <div className={parentClass}>
          <div className="w-44 rotate_opposite_animation">
            <img src={codechefLogo} alt="codechef logo" className="w-full" />
          </div>
        </div>
        <div className="block">
          <span className="text-5xl text-primary">&#8734;</span>
        </div>
        <div className={parentClass}>
          <div className="w-44 rotate_opposite_animation">
            <img
              src={logo}
              alt="PCCOE codechef chapter logo"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;

/*
<div className="group w-1/2 flex justify-center items-center">
      <div className="flex items-center gap-14 animate-spin-slow group-hover:animate-[spin_15s_linear_2]">
        <div className="w-44 animate-spin-opp-slow group-hover:animate-[spinOpposite_15s_linear_2]">
          <img src={codechefLogo} alt="codechef logo" className="w-full" />
        </div>
        <div>
          <span className="text-5xl text-primary">&#8734;</span>
        </div>
        <div className="w-44 animate-spin-opp-slow group-hover:animate-[spinOpposite_1s_linear_2]">
          <img
            src={logo}
            alt="PCCOE codechef chapter logo"
            className="w-full"
          />
        </div>
      </div>
    </div>
    */
