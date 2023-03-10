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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="xl:py-[3rem] flex flex-col mx-4 md:mx-20 xl:flex-row-reverse xl:justify-center xl:items-center space-y-4">
      <div className="flex-1 h-5/6  flex items-center self-center mt-4 xl:self-auto xl:mt-0">
        <img
          className="p-12 rounded-xl  bg-white bg-opacity-10 shadow-xl backdrop-blur-xl h-[20rem] min-w-[20rem]"
          // style={{ width: "26vw", height: "25vw" }}
          src={image}
          alt="logo"
        ></img>
      </div>
      <div className="flex-[1.7] flex flex-col gap-7">
        <Roll right>
          <div className="text-5xl font-iceberg text-center xl:text-left">
            The{" "}
            <span className="text-sky-600 bg-white px-5 border rounded-xl">
              Blue
            </span>{" "}
            BIT
          </div>
        </Roll>

        <Roll left when={ani2}>
          <div className="text-2xl text-center xl:text-left">
            #ThinkTwiceCodeOnce
          </div>
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
          <div className="flex max-xl:flex-col max-xl:items-center gap-5 cursor-pointer">
            <div
              class="apply-button"
              data-hackathon-slug="the-blue-bit-round-1"
              data-button-theme="light"
            ></div>
            <Process />
          </div>
        </Bounce>
      </div>
    </div>
  );
};
