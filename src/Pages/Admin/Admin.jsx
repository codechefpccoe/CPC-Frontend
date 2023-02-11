import React, { useState, useEffect, useRef } from "react";
import { db } from "../../Config/Firebase";
import { CardMain } from "./CardMain";
import { loaderAction } from "../../Store/loader-slice";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

export const Admin = () => {
  const name = useRef();
  const description = useRef();
  const date = useRef();
  const url = useRef();

  const [adminPage, setAdminPage] = useState("Main");
  const [first, setFirst] = useState(true);
  const [events, setEvents] = useState([]);
  const [access, setAccess] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user") !== "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh") {
      dispatch(loaderAction.changeLoaderStateFalse());
      setAccess(false);
      return;
    }
    if (first === true) {
      dispatch(loaderAction.changeLoaderStateTrue());
    }
    setFirst(false);

    let data = [];
    db.collection("events")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .then(() => {
        console.log(data);
        setEvents(data);
        dispatch(loaderAction.changeLoaderStateFalse());
      });
  }, [events]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const sendEventDataToFirebase = () => {
    const id = getRandomInt(100000000, 1000000000);
    if (
      name.current.value !== "" &&
      description.current.value !== "" &&
      date.current.value !== "" &&
      url.current.value !== ""
    ) {
      const data = {
        id: id,
        name: name.current.value,
        desc: description.current.value,
        date: date.current.value,
        posterid: url.current.value,
      };
      db.collection("events")
        .doc(id.toString())
        .set(data)
        .then(() => {
          message.success("Event Data Send Successfully");
          setAdminPage("Main");
        })
        .catch((e) => console.log(e));
    }
  };

  const MainPage = (
    <>
      <button
        className="appearance-none flex items-center justify-center w-48 bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
        onClick={() => setAdminPage("AddEvent")}
      >
        Add event
      </button>
      <div className="w-full flex flex-wrap gap-3 items-center justify-evenly mt-6">
        {events &&
          events.map((doc) => {
            return <CardMain key={doc?._id} data={doc} />;
          })}
      </div>
    </>
  );

  const AddEvent = (
    <div className="w-full max-w-lg p-8">
      <div className="md:flex md:items-center mb-6 ">
        <div className="md:w-1/3">
          <label className="block p-2 font-medium md:text-right ">Name</label>
        </div>
        <div className="md:w-2/3">
          <input
            type="text"
            className="shadow-md border rounded-md w-full py-1 px-2 focus:outline-none hover:border-grey  focus:border-black focus:bg-white focus:shadow-outline"
            placeholder="Event Name"
            ref={name}
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
            ref={description}
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
            ref={url}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block p-2 font-medium md:text-right">Date</label>
        </div>
        <div className="md:w-2/3">
          <input
            type="date"
            className="shadow-md border rounded-md w-80 py-1 px-2"
            placeholder="Select a date"
            ref={date}
          />
        </div>
      </div>
      <div className="md:flex md:items-center flex-col mb-6">
        <div className="md:w-1/3"></div>
        <div className="flex flex-row gap-3 md:w-2/3">
          <button
            className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
            onClick={() => setAdminPage("Main")}
            type="button"
          >
            Back
          </button>
          <button
            className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
            type="button"
            onClick={sendEventDataToFirebase}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {access ? (
        <div className="flex items-center flex-col justify-center py-2">
          {adminPage === "Main" && MainPage}
          {adminPage === "AddEvent" && AddEvent}
        </div>
      ) : (
        <div className="flex items-center justify-center p-auto font-bold">
          You do not have Access of Admin Page
        </div>
      )}
    </>
  );
};
