import React from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="flex flex-col justify- items-center p-[0.5rem_1rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)] rounded-xl min-w-[4.5rem] max-w-[4.5rem] dark:bg-[#181818]">
      <h2 className="text-xl font-bold">{value}</h2>
      <p>{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
