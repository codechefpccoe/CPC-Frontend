import React from "react";

export const Price = () => {
  return (
    <div>
      <div id = "prizes" className="m-8 font-cairo flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6 text-3xl ">PRIZES</div>
        </div>
        <div className="flex justify-center items-center text-3xl">
          <div
            className="m-4 mx-8 flex flex-col justify-center items-center shadow-2xl shadow-sky-600 rounded-2xl p-4 bg-white bg-opacity-20
        backdrop-blur-sm gap-3"
          >
            <div className="text-5xl">🥈</div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-gray-300">₹ 6000 ( $70 )</div>
              <div>+ Goodies</div>
            </div>
          </div>
          <div
            className="m-4 mx-8 flex flex-col justify-center items-center shadow-2xl shadow-sky-600 rounded-2xl p-4 bg-white bg-opacity-20
        backdrop-blur-sm gap-3"
          >
            <div className="text-7xl">🥇</div>
            <div className=" flex flex-col justify-center items-center">
              <div className="text-amber-400">₹ 8000 ( $100 )</div>
              <div>+ Goodies</div>
            </div>
          </div>
          <div
            className="m-4 mx-8 flex flex-col justify-center items-center shadow-2xl shadow-sky-600 rounded-2xl p-4 bg-white bg-opacity-20
        backdrop-blur-sm gap-3"
          >
            <div className="text-4xl">🥉</div>
            <div className=" flex flex-col justify-center items-center">
              <div className="text-orange-700">₹ 4000 ( $50 )</div>
              <div>+ Goodies</div>
            </div>
          </div>
        </div>
        <div className="m-6 text-3xl ">
          Goodies for top performance (mostly 5-7 teams)
        </div>
      </div>
    </div>
  );
};
