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

  const detailsHideChnageHandler = (det) => {
    if (detailsHide === "hidden") {
      setDetailsHide(det);
    } else {
      setDetailsHide("hidden");
    }
  };

  return (
    <div className="h-screen flex flex-col gap-10 relative">
      <Navbar />
      <div className="pt-5 text-center">
        <h1 className="font-cairo font-bold">Upcoming Event</h1>
        <div className="flex justify-center">
          <UpcomingEvent EventData={EventData} />
        </div>
        <h1 className="mt-2 font-cairo font-bold">Past Event</h1>
        <div className="">
          <PastEvent
            EventData={EventData}
            detailsHideChnageHandler={detailsHideChnageHandler}
          />
        </div>
      </div>
      <div
        className={`absolute bottom-0 right-0 w-[30%] bg-white h-[86%] shadow-2xl drop-shadow-lg ${detailsHide}`}
      >
        <EventDetails
          detailsHideChnageHandler={detailsHideChnageHandler}
          detailsHide = {detailsHide}
        />
      </div>
    </div>
  );
};
