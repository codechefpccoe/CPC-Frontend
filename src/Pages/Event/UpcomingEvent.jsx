import React, { useEffect, useState } from "react";
import UpComingCard from "./UpComingCard";
// import UpComingEventData from "./UpComingEventData";

export const UpcomingEvent = ({ EventData }) => {
  const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  return (
    <>
      <div className="">
        {EventData.map((val, ind) => {
          if (val.date > getCurrentDate())
            return <UpComingCard key={ind} Name={val.name} Date={val.date} />;
        })}
      </div>
    </>
  );
};
