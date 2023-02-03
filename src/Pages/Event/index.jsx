import React from "react";
import { UpcomingEvent } from "./UpcomingEvent";
import PastEvent from "./PastEvent";
import Navbar from "../../Components/Navbar";

export const Event = () => {
  return (
    <>
    <Navbar />  
    <div className="pt-5 text-center">
      <h1 className="font-cairo font-bold">Upcoming Event</h1>
      <div className="flex justify-center">
        <UpcomingEvent />
      </div>
      <h1 className="mt-2 font-cairo font-bold">Past Event</h1>
      <div className="">
        <PastEvent />
      </div>
    </div>
    </>
    
  );
};
