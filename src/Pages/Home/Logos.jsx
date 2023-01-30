import React from "react";
import logo from "../../Images/logo.png";
import codechefLogo from "../../Images/codechef.png";

const Logos = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative z-[40] max-md:h-[90vh] backgroundContainer">
      <div className="absolute w-44 top-auto roatate_circle_animation1 max-xl:w-40 max-lg:w-36 max-sm:w-28 max-vs:w-24">
        <img src={codechefLogo} alt="codechef logo" className="w-full" />
      </div>
      <div className="relative">
        <div className="rotate_animation">
          <span className="text-5xl text-primary max-lg:text-4xl max-md:text-5xl max-md:text-black max-sm:text-4xl max-vs:text-3xl">
            &#8734;
          </span>
        </div>
      </div>
      <div className="absolute w-44 top-auto roatate_circle_animation2 max-xl:w-40 max-lg:w-36 max-sm:w-28 max-vs:w-24">
        <img src={logo} alt="PCCOE codechef chapter logo" className="w-full" />
      </div>
    </div>
  );
};

export default Logos;
