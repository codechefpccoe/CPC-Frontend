import React from "react";

export default function UpComingCard(props) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-4/5 flex justify-between text-center bg-gradient-to-r from-white via-gray-300 to-white ... hover:shadow-lg transform hover:scale-x-110 hover:scale-y-110 ease-in-out duration-300">
        <div className="w-1/3 font-cairo text-xs h-full font-bold">
          {props.Name}
        </div>
        <div className="w-1/3 font-cairo text-xs h-full">{props.Date}</div>
        <div className="w-1/3 font-cairo text-xs h-full">
          <button className="bg-gradient-to-r from-[#00fff2] to-[#00B2FF] ... h-7 w-24 rounded-full">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
