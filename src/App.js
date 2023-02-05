//? React
import React, { useEffect } from "react";

//? React Router Dom
import { Navigate, Route, Routes } from "react-router-dom";

//? Firebase
import firebase from "firebase";
import { db } from "./Config/Firebase";

//? Redux
import { useDispatch } from "react-redux";
import { loginAction } from "./Store/login-slice";

//? Pages
import LoginSignUp from "./Pages/LoginSignUp";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Enliven from "./Pages/Enliven";
import { Admin } from "./Pages/Admin/Admin";
import { Dashboard } from "./Pages/Dashboard";
import { Event } from "./Pages/Event";
import { Loader } from "./Components/Loader";
import { EventDetails } from "./Pages/Admin/EventDetails";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loaderAction.changeLoaderState({ loader: "Loading a Wonderful Experience !!!" }))
    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        db.collection("user")
          .doc(user.email)
          .get()
          .then((data) => {
            if (data.data())
              dispatch(
                loginAction.addLogin({
                  name: user.displayName,
                  email: user.email,
                  username: data?.data()?.username,
                  coins: data?.data()?.coins,
                })
              );
          });
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/forgetpassword" element={<LoginSignUp />} />
        <Route path="/events" element={<Event />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/enliven" element={<Enliven />} />
        <Route exact path="/edit/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Loader />
    </>
  );
};

export default App;

// PathName refer Readme.md
