import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import { Login } from "./Pages/LoginSignUp/Login";
import { SignUp } from "./Pages/LoginSignUp/SignUp";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const App = () => {
  const [animationClasses, setAnimationClasses] = useState("");
  const themeClasses = `absolute left-0 dark_theme ${animationClasses}`;
  const dark = useSelector((state) => state.theme.darkTheme)

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

  const [cookies, setCookie, deleteCookie] = useCookies(["user"]);

  const cookieInitalCheck = () => {
    if (cookies.username === undefined) {
      // No Username
    } else {
      // username && get data from backend && set send data to redux
    }
    // console.log(cookies.username)
    // deleteCookie('username')
  };

  // useEffect(() => {
  //   cookieInitalCheck()
  // }, [])

  return (
    <div className="flex flex-col h-screen relative">
      <div className={themeClasses}></div>
      <Navbar themeChangeAnimationHandler={themeChangeAnimationHandler} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

// PathName refer Readme.md
