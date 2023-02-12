import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

export const Rounds = () => {
  return (
    <div
      style={{ background: "#222222" }}
      className="py-10 text-white flex w-full justify-around items-center"
    >
      <div className="text-2xl">Rounds</div>
      <div className="flex gap-10 text-center">
        <Fade right>
          <section className="p-7 rounded-lg bg-white bg-opacity-10 shadow-xl shadow-sky-600">
            <div className="text-xl">Round 1(Online)</div>
            <div>36 hrs</div>
          </section>
        </Fade>

        <Fade right>
          <section className="p-7 rounded-lg  bg-white bg-opacity-10 shadow-xl shadow-sky-600">
            <div className="text-xl">Round 2 (Offline) </div>
            <div>6 Hrs</div>
          </section>
        </Fade>
      </div>
    </div>
  );
};
