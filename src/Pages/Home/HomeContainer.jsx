import React from "react";
import Content from "./Content";
import Logos from "./Logos";

const HomeContainer = () => {
  return (
    <div className="flex w-full flex-1 px-16 -mt-8 dark:bg-[#181818] max-xl:mt-0 max-lg:px-8 max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:px-0 max-md:gap-8">
      <h4 className="rotate font-medium dark:text-white z-[40] max-vs:text-base">
        <span className="text-primary">Code</span> Eat{" "}
        <span className="text-primary">Sleep</span> Repeat
      </h4>
      <Content />
      <Logos />
    </div>
  );
};

export default HomeContainer;

// "p-2 -rotate-90 absolute right-1 top-1/2 font-cairo text-base font-medium origin-[100%_0] translate-y-[-100%] translate-x-[-25%]"
