import React from "react";
import Content from "./Content";
import Logos from "./Logos";

const HomeContainer = () => {
  return (
    <div className="flex w-full flex-1 px-16 -mt-12 dark:bg-[#181818]">
      <Content />
      <div className="w-1/2 flex justify-center items-center relative z-[100]">
        <Logos />
      </div>
      <h4 className="rotate font-medium dark:text-white z-[100]">
        <span className="text-primary">Code</span> Eat{" "}
        <span className="text-primary">Sleep</span> Repeat
      </h4>
    </div>
  );
};

export default HomeContainer;

// "p-2 -rotate-90 absolute right-1 top-1/2 font-cairo text-base font-medium origin-[100%_0] translate-y-[-100%] translate-x-[-25%]"
