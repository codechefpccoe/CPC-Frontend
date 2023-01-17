import React from "react";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

const Content = () => {
  return (
    <div className="w-1/2 justify-center flex flex-col gap-6 px-8">
      <div className="font-iceberg text-4xl">
        <h1>
          <span className="text-primary">CODE</span> CHEF
        </h1>
        <h1>
          PCCOE <span className="text-primary">CHAPTER</span>
        </h1>
      </div>
      <div className="font-cairo text-base leading-6 pr-8">
        <p>
          CodeChef PCCOE Chapter is the community for the students of Pimpri
          Chinchwad College of Engineering, Pune. Our vision and goal is to
          create competitive coding culture in our campus and to inspire more
          people to participate in coding contest.
        </p>
      </div>
      <div className="font-cairo text-primary text-2xl">
        <h1>Let Us Help You To get Started!</h1>
      </div>
      <div className="flex gap-8 text-3xl">
        <ImLinkedin className="text-[#0A66C2] cursor-pointer" />
        <ImFacebook2 className="text-[#395185] cursor-pointer" />
        <FiInstagram className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Content;
