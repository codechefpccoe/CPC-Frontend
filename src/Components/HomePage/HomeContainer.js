import React from "react";
import Content from "./Content";
import Logos from "./Logos";

const HomeContainer = () => {
  return (
    <div className="flex w-full flex-1">
      <Content />
      <Logos />
      <h4 className="rotate font-medium">
        <span className="text-primary">Code</span> Eat{" "}
        <span className="text-primary">Sleep</span> Repeat
      </h4>
    </div>
  );
};

export default HomeContainer;

// "p-2 -rotate-90 absolute right-1 top-1/2 font-cairo text-base font-medium origin-[100%_0] translate-y-[-100%] translate-x-[-25%]"
