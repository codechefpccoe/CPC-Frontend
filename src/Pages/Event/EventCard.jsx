import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Slide } from "react-reveal";
import "./event.css";

const EventCard = (props) => {
  return (
    <Slide right opposite when={props.sl}>
      <div className="event-shadow-card shadow-md shadow-indigo-500/50 rounded-xl mx-5 w-[200px] h-[230px] -top-[459px] bg-black container text-white hover:shadow-lg transform hover:scale-110 ease-in duration-300">
        <h1 className="font-cairo font-bold mt-6 align-middle">{props.Name}</h1>
        <p className="font-cairo text-xs mt-3">{props.Date}</p>
        <div className="mt-12">
          <button className="bg-[#00C8DD] px-4 rounded-full align-middle">
            About
          </button>
        </div>
        <div className="mt-2.5 ">
          <button className="bg-[#00C8DD] px-6 rounded-full align-middle">
            Feedback
          </button>
        </div>
      </div>
    </Slide>
  );
};
export default EventCard;
