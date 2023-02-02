import React, { useState, useEffect } from "react";
import { db } from "../../Config/Firebase";
// import { doc, deleteDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

export const Admin = () => {
  const [filterName, setFilterName] = useState("Update Event");
  const [filterData, setFilterData] = useState(null);
  const [filterMenu, setFilterMenu] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");

  const updateFilterButton = (e) => {
    setFilterMenu(false);
    setFilterName(e.name);
    setId(e.id.toString());
    setName(e.name);
    setDescription(e.desc);
    setUrl(e.posterid);
    setDate(e.date);
  };

  useEffect(() => {
    let e = [];
    db.collection("events")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          e.push(doc.data());
        });
      })
      .then(() => {
        setFilterData(e);
      });
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const sendEventDataToFirebase = () => {
    if (!id) {
      const id = getRandomInt(100000000, 1000000000);
      const data = {
        id: id,
        name: name,
        desc: description,
        date: date,
        posterid: url,
      };
      db.collection("events")
        .doc(id.toString())
        .set(data)
        .catch((e) => console.log(e));
    } else {
      // update(ref(db, "event/" + id), {
      //   name: name,
      //   desc: description,
      //   date: url,
      //   upcoming: date,
      // })
      //   .then(() => {
      //     alert("data was updated successfully");
      //   })
      //   .catch((e) => console.log(e));
    }
  };

  const deleteEvent = async () => {
    await db.deleteDoc(db.doc(db), "events", id.toString());
    setFilterMenu(false);
    setFilterName("Update Event");
    setId("");
    setName("");
    setDescription("");
    setUrl("");
    setDate("");
  };

  return (
    <div className="flex items-center flex-col justify-center py-2">
      <div className="md:flex md:items-center mb-6 p-8">
        <label
          className="block p-2 font-medium md:text-right "
          for="event-name"
        >
          Select
        </label>
        <div className="bg-white border border-black rounded-md px-4 py-1 relative cursor-pointer hover:border-gray-400">
          <p
            className="text-base tracking-wide text-black flex items-center gap-2"
            onClick={() => setFilterMenu(!filterMenu)}
          >
            {filterName}
            <IoChevronDown
              className={`text-base text-black duration-150 transition-all ease-in-out
            `}
            />
          </p>
        </div>
        {filterData && filterMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white w-48 z-50 backdrop-blur-sm max-h-44 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 py-2 flex flex-col items-center justify-center rounded-md shadow-md absolute mt-64"
          >
            {filterData?.map((data) => (
              <div
                key={data.name}
                className="flex items-center gap-2 px-4 py-1 hover:bg-gray-300"
                onClick={() => updateFilterButton(data)}
              >
                <p className="w-full">
                  {data.length > 15
                    ? `${data.name.slice(0, 15)}...`
                    : data.name}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
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
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
              value={url}
              onChange={(event) => setUrl(event.target.value)}
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
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center flex-col mb-6">
          <div class="md:w-1/3"></div>
          <div className="flex flex-row gap-3 md:w-2/3">
            <button
              className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
              type="button"
              onClick={sendEventDataToFirebase}
            >
              {filterName !== "Update Event" ? "Update" : "Submit"}
            </button>
            {filterName !== "Update Event" && (
              <button
                className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
                type="button"
                onClick={deleteEvent}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
