import React from "react";
import { useInput } from "../../Hooks/use-input";

export const Admin = () => {
  return (
    <div className="flex items-center flex-col justify-center py-4">
      <form className="w-full max-w-lg p-8">
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block p-2 font-medium md:text-right "
              for="event-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              className="shadow-md border rounded-md w-full py-1 px-2 focus:outline-none hover:border-grey  focus:border-black focus:bg-white focus:shadow-outline"
              placeholder="Event Name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 ">
          <div className="md:w-1/3">
            <label className="block p-2 font-medium md:text-right ">
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="shadow-md  border rounded-md w-80 h-32 py-1 px-2"
              placeholder="Description of Event"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block p-2 font-medium  md:text-right">
              Poster URL
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="url"
              className="shadow-md border rounded-md w-80 py-1 px-2"
              placeholder="URL"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block p-2 font-medium md:text-right">Date</label>
          </div>
          <div className="md:w-2/3">
            <input
              datepicker
              type="date"
              className="shadow-md border rounded-md w-80 py-1 px-2"
              placeholder="Select a date"
              data-mdb-toggle="datepicker"
            />
          </div>
        </div>
        <div className="md:flex md:items-center flex-col mb-6">
          <div class="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
