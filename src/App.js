import React,{useEffect} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Event from "./Pages/Event";
import firebase from "firebase";
import { Admin } from "./Pages/Admin/Admin";
import LoginSignUp from "./Pages/LoginSignUp";
import { Dashboard } from "./Pages/Dashboard";
import { useDispatch } from "react-redux";
import { loginAction } from "./Store/login-slice";
import { db } from "./Config/Firebase";
import { Loader } from "./Components/Loader";
import Enliven from "./Pages/Enliven";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("user")
        .doc(user.email)
        .get()
        .then((data) => {
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={ <Event/> } />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/enliven" element={<Enliven />} />
      </Routes>
      <Loader />
    </>
  );
};

export default App;

// PathName refer Readme.md
