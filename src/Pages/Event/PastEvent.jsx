import React from "react";
import EventCard from "./EventCard";
import PastEventData from "./PastEventData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PastEvent = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight - 500;
  };

  return (
    <div className="mt-5 w-3/5 flex justify-between overflow-y-hidden overflow-x-scroll scroll-mx-10 whitespace-nowrap scroll-smooth">
      <MdChevronLeft onClick={slideLeft} size={40} />
      {PastEventData.map((val, ind) => {
        return <EventCard key={ind} Name={val.Name} Date={val.Date} />;
      })}
      <MdChevronRight onClick={slideRight} size={40} />
    </div>
  );
};

export default PastEvent;
