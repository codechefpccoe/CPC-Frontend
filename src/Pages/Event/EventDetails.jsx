import React from "react";
import poster1 from "../../Images/poster1.png";
import poster2 from "../../Images/poster2.png";
import { TbArrowBack } from "react-icons/tb";

const  EventDetails = (props) => {
  return (
    <div className="relative flex flex-col justify-start h-full gap-8 pt-12 overflow-auto">
      <div
        className="absolute top-[3%] left-[3%] text-xl text-primary cursor-pointer max-sm:text-3xl"
        onClick={props.detailsHideChnageHandler}
      >
        <TbArrowBack />
      </div>
      <div className="text-center font-semibold">
        <h1 className="text-xl">Event Name</h1>
        <h2 className="text-base">Date</h2>
      </div>
      <div className="px-8 flex flex-col gap-3 items-start text-sm">
        <p>Details</p>
        <p className="text-justify">
          CodeChef PCCOE Chapter is the community for the students of Pimpri
          Chinchwad College of Engineering, Pune. Our vision and goal is to
          create competitive coding culture in our campus and to inspire more
          people to participate in coding contest.
        </p>
        <button className="bg-primary px-6 py-1 rounded-2xl text-white">
          Feedback
        </button>
      </div>
      <div className="px-7 text-sm flex flex-col gap-3">
        <p>Photos</p>
        <div className="flex justify-start flex-wrap gap-4">
          <img src={poster1} className="w-[30%] h-auto max-lg:w-[45%] max-sm:w-[100%] max-vs:w-[30%]" />
          <img src={poster2} className="w-[30%] h-auto max-lg:w-[45%] max-sm:w-[100%] max-vs:w-[30%]" />
          <img src={poster1} className="w-[30%] h-auto max-lg:w-[45%] max-sm:w-[100%] max-vs:w-[30%]" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
