import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Event from "./Pages/Event";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/LoginSignUp/Login";
import SignUp from "./Pages/LoginSignUp/SignUp";
import { useCookies } from "react-cookie";
import { Admin } from "./Pages/Admin/Admin";
import Index from "./Pages/LoginSignUp/Index";
import Enliven from "./Pages/Enliven";

const App = () => {
  const [cookies, setCookie, deleteCookie] = useCookies(["user"]);

  const cookieInitalCheck = () => {
    if (cookies.token === undefined) {
      // No Username
    } else {
      // username && get data from backend && set send data to redux
    }
    // console.log(cookies.username)
    // deleteCookie('username')
  };

  useEffect(() => {
    cookieInitalCheck();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Index />} />
        <Route path="/signup" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Event />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/enliven" element={<Enliven />} />
      </Routes>
    </>
  );
};

export default App;

// PathName refer Readme.md
