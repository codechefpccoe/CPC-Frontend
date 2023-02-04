import React, {useState, useEffect} from "react";
import { UpcomingEvent } from "./UpcomingEvent";
import PastEvent from "./PastEvent";
import Navbar from "../../Components/Navbar";
import { db } from "../../Config/Firebase";

export const Event = () => {
  const [EventData, setud] = useState([]);

 
  useEffect(() => {
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setud(data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-5 text-center">
        <h1 className="font-cairo font-bold">Upcoming Event</h1>
        <div className="flex justify-center">
          <UpcomingEvent EventData={EventData} />
        </div>
        <h1 className="mt-2 font-cairo font-bold">Past Event</h1>
        <div className="">
          <PastEvent EventData={EventData} />
        </div>
      </div>
    </>
  );
};
