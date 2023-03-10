import React from "react";
import Fade from "react-reveal/Fade";

export const Rounds = () => {
  return (
    <div
      // style={{ background: "#222222" }}
      className="py-[6rem] lg:py-[3rem] text-white flex lg:flex-row flex-col lg:space-y-0 space-y-5 w-full justify-around items-center"
    >
      <div className="text-4xl">ROUNDS</div>
      <div className="flex lg:flex-row flex-col gap-10 text-center">
        <Fade right>
          <section className="p-7 rounded-lg bg-white bg-opacity-10 shadow-xl shadow-sky-600 backdrop-blur-lg">
            <div className="text-xl">Round 1 (Online)</div>
            <div>36 hrs</div>
          </section>
        </Fade>

        <Fade right>
          <section className="p-7 rounded-lg  bg-white bg-opacity-10 shadow-xl shadow-sky-600 backdrop-blur-lg">
            <div className="text-xl">Round 2 (Offline) </div>
            <div>6 Hrs</div>
          </section>
        </Fade>
      </div>
    </div>
  );
};
