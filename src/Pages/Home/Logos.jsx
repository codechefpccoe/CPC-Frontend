import React from "react";
import logo from "../../Images/logo.png";
import codechefLogo from "../../Images/codechef.png";

const Logos = () => {
  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className="flex items-center gap-14">
        <div className="w-48">
          <img src={codechefLogo} alt="codechef logo" className="w-full" />
        </div>
        <div>
          <span className="text-5xl text-primary">&#8734;</span>
        </div>
        <div className="w-48">
          <img
            src={logo}
            alt="PCCOE codechef chapter logo"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
