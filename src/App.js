import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { Admin } from "./Pages/Admin/Admin";
import Index from "./Pages/LoginSignUp/Index";

const App = () => {
  const [animationClasses, setAnimationClasses] = useState("");
  const [_user, setuser] = useState()
  const themeClasses = `absolute left-0 dark_theme ${animationClasses}`;
  const dark = useSelector((state) => state.theme.darkTheme);

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
      setuser(user)
    })
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <div className={themeClasses}></div>
      <Navbar themeChangeAnimationHandler={themeChangeAnimationHandler} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Index />} />
        <Route path="/signup" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;

// PathName refer Readme.md
