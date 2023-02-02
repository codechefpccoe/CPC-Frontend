import React from "react";
import UpComingCard from "./UpComingCard";
import UpComingEventData from "./UpComingEventData";
import { Zoom } from "react-reveal";

export const UpcomingEvent = () => {
  return (
    <Zoom cascade>
      <div className="mt-5 w-full">
          {UpComingEventData.map((val, ind) => {
            return <UpComingCard key={ind} Name={val.Name} Date={val.Date} />;
          })}
      </div>
    </Zoom>
  );
};
