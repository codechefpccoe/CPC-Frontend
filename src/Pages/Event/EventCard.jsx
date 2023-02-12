import React from "react";
import "./event.css";

const EventCard = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-evenly items-center space-y-3 bg-[#00C1BA] w-[15rem] h-[15rem] rounded-lg">
        <div className="text-white">
          <h2 className="font-cairo text-lg font-bold">{props.Name}</h2>
          <p>{props.Date}</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button className="bg-white w-[10rem] rounded-full p-[0.3rem_1rem]" onClick={props.detailsHideChnageHandler}>
            About
          </button>
          <button className="bg-white w-[10rem] rounded-full p-[0.3rem_1rem]">
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
