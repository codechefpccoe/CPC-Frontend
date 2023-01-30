import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Event from "./Pages/Event";
import Login from "./Pages/LoginSignUp/Login";
import SignUp from "./Pages/LoginSignUp/SignUp";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { Admin } from "./Pages/Admin/Admin";
import LoginSignUp from "./Pages/LoginSignUp";
import { Dashboard } from "./Pages/Dashboard";
import { useDispatch } from "react-redux";
import { loginAction } from "./Store/login-slice";
import { db } from "./Config/Firebase";

const App = () => {
  const [animationClasses, setAnimationClasses] = useState("");
  const themeClasses = `absolute left-0 dark_theme ${animationClasses}`;
  const dark = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch()

  const themeChangeAnimationHandler = () => {
    if (animationClasses === "" && !dark) {
      setAnimationClasses("hover bg-black");
      setTimeout(() => {
        setAnimationClasses("");
      }, 500);
    } else {
      setAnimationClasses("hover bg-white");
      setTimeout(() => {
        setAnimationClasses("");
      }, 500);
    }
  };


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      db.collection("user").doc(user.email).get().then((data) => {
        console.log(user)
        dispatch(loginAction.addLogin({ name: user.displayName, email: user.email, username: data.data().username, coins: data.data().coins }));
      })
    })
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Event />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;

// PathName refer Readme.md
