import React from "react";
import { Bounce } from "react-reveal";
import devfolio from "../../Images/Devfolio_Logo-White.png";
import polygon from "../../Images/Polygon_Logo-White.png";
import solana from "../../Images/Solana Dark.png";
import filecoin from "../../Images/Filecoin Coloured White Text-1.png";
import replit from "../../Images/Replit-Dark-Background.png";

const Sponsers = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-8 max-lg:pb-8">
      <Bounce bottom>
        {/* <div className="text-3xl text-center">SPONSERS</div> */}
        <div className="flex flex-col w-[80%] justify-center items-center gap-8">
          <div className="text-transparent bg-clip-text font-bold bg-gradient-to-r text-3xl to-orange-500 from-orange-300 p-4 flex max-lg:flex-col">
            <h1 className="text-center">GOLDEN</h1>
            <h1 className="text-center lg:px-4">SPONSERS</h1>
          </div>
          <div className="flex flex-row max-lg:flex-wrap max-lg:flex-col gap-8">
            <div className="backdrop-filter backdrop-blur-xl bg-opacity-30 w-64 h-auto border border-gray-600 p-4 rounded-md shadow-xl shadow-sky-600">
              <img src={devfolio} className="w-full h-full" />
            </div>
            <div className="backdrop-filter backdrop-blur-xl bg-opacity-30 w-64 h-auto border border-gray-600 p-4 rounded-md shadow-xl shadow-sky-600">
              <img src={polygon} className="w-full h-full" />
            </div>
          </div>
          <div className="text-transparent bg-clip-text font-bold bg-gradient-to-r text-3xl to-slate-300 from-slate-50 p-4 flex max-lg:flex-col">
            <h1 className="text-center">SILVER</h1>
            <h1 className="text-center lg:px-4">SPONSERS</h1>
          </div>
          <div>
            <div className="flex flex-row max-lg:flex-wrap max-lg:flex-col gap-8">
              <div className="backdrop-filter backdrop-blur-xl bg-opacity-30 w-64 h-auto border border-gray-600 p-4 rounded-md shadow-xl shadow-sky-600">
                <img src={solana} className="w-full h-full" />
              </div>

              <div className="backdrop-filter backdrop-blur-xl bg-opacity-30 w-64 h-auto border border-gray-600 p-4 rounded-md shadow-xl shadow-sky-600">
                <img src={filecoin} className="w-full h-full" />
              </div>
              <div className="backdrop-filter backdrop-blur-xl bg-opacity-30 w-64 h-auto border border-gray-600 p-4 rounded-md shadow-xl shadow-sky-600">
                <img src={replit} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Sponsers;
