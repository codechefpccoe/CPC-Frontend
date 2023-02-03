import React from "react";
import EventCard from "./EventCard";
import PastEventData from "./PastEventData";
import { Carousel } from "antd";

const PastEvent = () => {
  return (
    <>
      <Carousel autoplay autoplaySpeed={3000}>
        {PastEventData.map((val, ind) => {
          return <EventCard key={ind} Name={val.Name} Date={val.Date} />;
        })}
      </Carousel>
    </>
  );
};

export default PastEvent;
