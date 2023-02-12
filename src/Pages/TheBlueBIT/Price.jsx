import React from "react";
import { Zoom } from "react-reveal";

export const Price = () => {
  return (
    <div>
      <div
        id="prizes"
        className="m-8 font-cairo flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6 mt-18 text-3xl ">PRIZES</div>
        </div>
        <div className="flex justify-center items-center text-3xl">
          <Zoom>
            <div className="m-4 mx-8 flex flex-col justify-center items-center p-7 rounded-lg  bg-white bg-opacity-10 shadow-xl shadow-sky-600 backdrop-blur-lg gap-3">
              <div className="text-5xl">🥈</div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-gray-300">₹ 6000 ( $70 )</div>
                <div>+ Goodies</div>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="m-4 mx-8 flex flex-col justify-center items-center p-7 rounded-lg  bg-white bg-opacity-10 shadow-xl shadow-sky-600 backdrop-blur-lg gap-3">
              <div className="text-7xl">🥇</div>
              <div className=" flex flex-col justify-center items-center">
                <div className="text-amber-400">₹ 8000 ( $100 )</div>
                <div>+ Goodies</div>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="m-4 mx-8 flex flex-col justify-center items-center p-7 rounded-lg  bg-white bg-opacity-10 shadow-xl shadow-sky-600 backdrop-blur-lg gap-3">
              <div className="text-4xl">🥉</div>
              <div className=" flex flex-col justify-center items-center">
                <div className="text-orange-400">₹ 4000 ( $50 )</div>
                <div>+ Goodies</div>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="m-6 text-2xl ">Goodies for top performance 🎁</div>
      </div>
    </div>
  );
};
