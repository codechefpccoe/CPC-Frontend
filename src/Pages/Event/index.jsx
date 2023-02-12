import React, { useState, useEffect } from "react";
import { UpcomingEvent } from "./UpcomingEvent";
import PastEvent from "./PastEvent";
import Navbar from "../../Components/Navbar";
import { db } from "../../Config/Firebase";
import EventDetails from "./EventDetails";

export const Event = () => {
  const [EventData, setud] = useState([]);
  const [detailsHide, setDetailsHide] = useState("hidden");

  useEffect(() => {
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setud(data);
      });
  }, []);

  const detailsHideChnageHandler = () => {
    if (detailsHide === "hidden") {
      setDetailsHide("");
    } else {
      setDetailsHide("hidden");
    }
  };

  return (
    <div className="h-screen dark:bg-black">
      <Navbar />
      <div className="flex flex-col text-center">
        {/* //? Upcoming Events */}
        <div className="flex justify-center py-4 back_image">
          <UpcomingEvent EventData={EventData} />
        </div>
        {/* //? Past Events */}
        <div className="p-4 space-y-4">
          <h1 className="font-cairo font-bold dark:text-white">Past Events</h1>
          <div className="">
            <PastEvent
              EventData={EventData}
              detailsHideChnageHandler={detailsHideChnageHandler}
            />
          </div>
        </div>
      </div>
      {/* //? Popup of Event Details */}
      <div
        className={`absolute bottom-0 right-0 w-[30%] bg-white h-[86%] shadow-2xl drop-shadow-lg ${detailsHide}`}
      >
        <EventDetails detailsHideChnageHandler={detailsHideChnageHandler} />
      </div>
    </div>
  );
};
