import React from "react";
import "./event.css";

const EventCard = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="event-shadow-card m-10 shadow-md shadow-indigo-500/50 rounded-xl mx-5 w-[500px] h-[230px] -top-[459px] bg-black container text-white hover:shadow-lg transform hover:scale-110 ease-in duration-300">
        <h1 className="font-cairo font-bold mt-6 text-2xl align-middle">{props.Name}</h1>
        <p className="font-cairo text-xl mt-3">{props.Date}</p>
        <div className="mt-12">
          <button className="bg-[#00C8DD] text-lg px-4 rounded-full align-middle">
            About
          </button>
        </div>
        <div className="mt-2.5 ">
          <button className="bg-[#00C8DD] text-lg px-6 rounded-full align-middle">
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
