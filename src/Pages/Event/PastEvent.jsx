import React from "react";
import EventCard from "./EventCard";
import PastEventData from "./PastEventData";
import { Carousel } from "antd";

const PastEvent = ({ EventData }) => {
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
      <Carousel autoplay autoplaySpeed={3000}>
        {EventData.map((val, ind) => {
          if (val.date < getCurrentDate())
            return <EventCard key={ind} Name={val.name} Date={val.date} />;
        })}
      </Carousel>
    </>
  );
};

export default PastEvent;
