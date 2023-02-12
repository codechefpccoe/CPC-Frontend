import React from "react";
import Logo from "../../Images/logo.webp"

export const Navbar = () => {
  document.title = "The BlueBIT | Home";

  return (
    <div className="sticky top-0 z-10 py-5 flex justify-between items-center px-10 pl-20 w-full border-b border-gray-100 ">
      <div className={`flex flex-row items-center brand rounded-xl p-5 bg-white bg-opacity-10 shadow-xl backdrop-blur-lg`}>
            <div className="w-12">
              <img src={Logo} alt="CPC Logo" className="w-full" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-bold text-3xl text-black dark:text-white max-sm:text-2xl max-sm:leading-5">
                CPC
              </div>
              <div className="text-primary text-xs max-sm:text-[0.6rem]">{`Codechef <PCCOE> Chapter`}</div>
            </div>
          </div>
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
