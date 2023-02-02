import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EventCard from "./EventCard";
import PastEventData from "./PastEventData";

const PastEvent = () => {
  const [toShow, settoShow] = useState(0);
  const [sl, ssl] = useState(true);

  const nextEvent = () => {
    ssl(false);
    setTimeout(() => {
      settoShow(toShow + 1);
      setTimeout(() => {
        ssl(true);
      }, 500);
    }, 1200);
  };

  const prevEvent = () => {
    ssl(false);
    setTimeout(() => {
      settoShow(toShow - 1);
      setTimeout(() => {
        ssl(true);
      }, 500);
    }, 0);
  };

  return (
    <div id="event-cards" className="relative mt-5 flex whitespace-nowrap ">
      {toShow === 0 ? <></> : <button onClick={() => prevEvent()}>BACK</button>}
      {PastEventData.map((val, ind) => {
        if (ind < toShow + 4 && ind >= toShow)
          return (
            <EventCard sl={sl} key={ind} Name={val.Name} Date={val.Date} />
          );
        else return <></>;
      })}
      {toShow === PastEventData.length - 4 ? (
        <></>
      ) : (
        <button onClick={() => nextEvent()}>NEXT</button>
      )}
    </div>
  );
};

export default PastEvent;
