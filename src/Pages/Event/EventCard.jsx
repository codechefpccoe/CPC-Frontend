import React from "react";

const EventCard = (props) => {
  return (
    <div className="card rounded-lg mx-3 min-w-[150px] h-48 -top-[459px] bg-black container text-white hover:shadow-lg transform hover:scale-110 ease-in duration-300">
      <h1 className="font-cairo font-bold mt-4 align-middle">{props.Name}</h1>
      <p className="font-cairo text-xs mt-3.5">{props.Date}</p>
      <div className="mt-6">
        <button className="bg-[#00C8DD] h-[22px] w-[82px] rounded-full align-middle">
          About
        </button>
      </div>
      <div className="mt-2.5 ">
        <button className="bg-[#00ADEA] h-[22px] w-[112px] rounded-full align-middle">
          Feedback
        </button>
      </div>
    </div>
  );
};
export default EventCard;
