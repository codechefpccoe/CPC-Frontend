import React from "react";
import { useEffect, useState } from "react";
import { Roll, Bounce } from "react-reveal";
import { Process } from "./Process";
import image from "./Assests/Frame 1.png";

export const MainContent = () => {
  const [ani2, sani2] = useState(false);
  const [ani3, sani3] = useState(false);
  const [ani4, sani4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      sani2(true);
    }, 1000);
    setTimeout(() => {
      sani3(true);
    }, 2000);
    setTimeout(() => {
      sani4(true);
    }, 3000);
  }, []);

  return (
    <div className="h-full flex justify-between mx-20">
      <div className="w-3/6 mt-16 flex flex-col gap-7">
        <Roll right>
          <div className="text-5xl font-iceberg">
            The{" "}
            <span className="text-sky-600 bg-white px-5 border rounded-lg">
              Blue
            </span>{" "}
            BIT
          </div>
        </Roll>

        <Roll left when={ani2}>
          <div className="text-2xl">#ThinkTwiceCodeOnce</div>
        </Roll>
        <Bounce left when={ani3}>
          <div className="text-slate-100 font-thin">
            The Blue BIT is an adrenaline-fueled hackathon where you can
            collaborate with top talents to create cutting-edge projects that
            can change the world. It is the ultimate playground for anyone who
            loves to build, tinker, and create.
          </div>
        </Bounce>
        <Bounce bottom when={ani4}>
          <div className="flex gap-10">
            <div className="rounded-lg bg-sky-600 px-10 py-3 w-fit cursor-pointer shadow-2xl shadow-slate-600">
              Register For FREE
            </div>
            <Process />
          </div>
        </Bounce>
      </div>

      <div className="h-5/6 flex items-center">
        <img
          className="p-20 rounded-xl  bg-white bg-opacity-10 shadow-xl backdrop-blur-lg"
          style={{ width: "26vw", height: "25vw" }}
          src={image} alt = "logo"
        ></img>
      </div>
    </div>
  );
};
