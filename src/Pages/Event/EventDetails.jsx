import React from "react";
import poster1 from "../../Images/poster1.png";
import poster2 from "../../Images/poster2.png";
import { TbArrowBack } from "react-icons/tb";

const EventDetails = (props) => {
  return (
    <div className="relative flex flex-col justify-evenly h-full">
      <div
        className="absolute top-[3%] left-[3%] text-xl text-primary cursor-pointer"
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
        <p>
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
        <div className="flex justify-between">
          <img src={poster1} className="w-[30%] h-auto" />
          <img src={poster2} className="w-[30%] h-auto" />
          <img src={poster1} className="w-[30%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
