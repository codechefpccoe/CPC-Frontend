import React from "react";
import { useEffect } from "react";
import * as THREE from 'three';
import { TweenMax, Power1, Elastic, Expo } from "gsap";
import image from "./Assests/code.png";


export const MainContent = () => {

  return (
    <div className="h-full flex justify-between">
      <div className="w-3/6 mt-16 ml-10 flex flex-col gap-7">
        <div className="text-5xl font-iceberg">
          The <span className="text-sky-600 bg-white p-1 border rounded-lg">Blue</span> BIT
        </div>
        <div className="text-2xl">#ThinkTwiceCodeOnce</div>
        <div className="text-slate-100 font-thin">
          The Blue BIT is an adrenaline-fueled hackathon where you can
          collaborate with top talents to create cutting-edge projects that can
          change the world. It is the ultimate playground for anyone who loves
          to build, tinker, and create.
        </div>
        <div className="bg-sky-600 px-10 py-3 w-fit cursor-pointer shadow-2xl shadow-slate-600">
          Register
        </div>
      </div>
      
      {/* <img className="" style={{ width: "40vw" }} src={image}></img> */}
    </div>
  );
};
