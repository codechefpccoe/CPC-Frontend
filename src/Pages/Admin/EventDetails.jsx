import React, { useState, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { loaderAction } from "../../Store/loader-slice";
import { useDispatch } from "react-redux";
import { Table, Button, message } from "antd";

export const EventDetails = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();
  const [editEvent, setEditEventB] = useState(true);
  const [count, setCount] = useState(false);
  const [feedback, setFeedbackB] = useState(false);
  const [access, setAccess] = useState(true);
  const [rows, setRows] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [posterid, setPosterid] = useState();

  function createData(number, item, qty, pn, rating, price) {
    return { number, item, qty, pn, rating, price };
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== "XuO#hyN#SeF#TDd$EmU8cW!PK0BxcUBh") {
      setAccess(false);
      return;
    }

    dispatch(loaderAction.changeLoaderStateTrue());

    db.collection("events")
      .doc(id)
      .get()
      .then((doc) => {
        return doc.data();
      })
      .then((data) => {
        setName(data.name);
        setDescription(data.desc);
        setDate(data.date);
        setPosterid(data.posterid);
      });

    db.collection("register")
      .doc(id)
      .get()
      .then((data) => {
        setRegistered(data.data().users);
      });

    db.collection("feedback")
      .doc(id)
      .collection("user")
      .get()
      .then((data) => {
        let i = 0;
        data.forEach((doc) => {
          let d = doc.data();
          setRows((rows) => [
            ...rows,
            createData(++i, d.name, d.email, d.pnumber, d.rating, d.suggest),
          ]);
        });
      })
      .then(() => {
        dispatch(loaderAction.changeLoaderStateFalse());
      });
  }, [id]);

  const EditData = () => {
    const data = {
      id: id,
      name: name,
      desc: description,
      date: date,
      posterid: posterid,
    };
    db.collection("events")
      .doc(id.toString())
      .set(data)
      .then(() => {
        message.success("Successfully made the changes");
        navigate("/admin");
      })
      .catch((e) => console.log(e));
  };

  const DeleteData = () => {
    db.collection("events")
      .doc(id.toString())
      .delete()
      .then(() => {
        message.success("Successfully Deleted the data");
        navigate("/admin");
      })
      .catch((e) => console.log(e));
  };

  const EditEvent = (
    <div className="flex item-center justify-center">
      <div className="w-full max-w-lg p-8">
        <div className="md:flex md:items-center justify-center mb-6 ">
          <div className="md:w-1/3">
            <label className="block p-2 font-medium md:text-right ">Name</label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              className="shadow-md border rounded-md w-full py-1 px-2 focus:outline-none hover:border-grey  focus:border-black focus:bg-white focus:shadow-outline"
              placeholder="Event Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
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
              value={posterid}
              onChange={(e) => setPosterid(e.target.value)}
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
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center flex-col mb-6">
          <div className="md:w-1/3"></div>
          <div className="flex flex-row gap-3 md:w-2/3">
            <button
              className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
              onClick={() => DeleteData()}
              type="button"
            >
              Delete
            </button>
            <button
              className="shadow-md border bg-black rounded-md px-8 py-2 text-white hover:text-black hover:bg-white hover:border-black font-medium active:bg-blue-200"
              type="button"
              onClick={() => EditData()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Count = (
    <>
      {registered ? (
        <section className="flex items-center justify-center font-bold pt-8">
          Register Count : {registered.length}{" "}
        </section>
      ) : (
        <section className="font-bold">Register Count : 0 </section>
      )}
      <br />
      <br />
    </>
  );

  const RegisteredPeople = (
    <>
      <section className="flex flex-row items-center justify-center font-bold">
        Emails of Student Registered
      </section>
      {registered ? (
        <>
          {registered &&
            registered.map((people) => {
              return (
                <section className="flex flex-row items-center justify-center">
                  {people}
                </section>
              );
            })}
        </>
      ) : (
        <>None</>
      )}
      <br />
      <br />
    </>
  );

  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Name",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Email",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Phone Number",
      dataIndex: "pn",
      key: "pn",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Feedback",
      key: "price",
      dataIndex: "price",
    },
  ];

  const Feedback = (
    <>
      <section className="text-center p-3 font-bold">Feedback</section>
      <Table columns={columns} dataSource={rows} />
    </>
  );

  return (
    <>
      {access ? (
        <>
          <div>
            <div
              className="flex flex-row items-center justify-center
             gap-2 mt-4"
            >
              <NavLink
                to={"/admin"}
                className=" border border-gray rounded-md  p-1 hover:text-primary hover:border-primary "
              >
                Admin
              </NavLink>
              <Button
                onClick={() => {
                  setFeedbackB(false);
                  setCount(false);
                  setEditEventB(true);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  setFeedbackB(false);
                  setCount(true);
                  setEditEventB(false);
                }}
              >
                Count
              </Button>
              <Button
                onClick={() => {
                  setFeedbackB(true);
                  setCount(false);
                  setEditEventB(false);
                }}
              >
                Feedbacks
              </Button>
            </div>
            {editEvent && EditEvent}
            {count && Count}
            {count && RegisteredPeople}
            {feedback && Feedback}
          </div>
        </>
      ) : (
        <>You do not have Access of Admin Page</>
      )}
    </>
  );
};
