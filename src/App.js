
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Login } from "./Pages/LoginSignUp/Login";
import { SignUp } from "./Pages/LoginSignUp/SignUp";
import { useCookies } from 'react-cookie';
import { Admin } from "./Pages/Admin/Admin";

const App = () => {

  const [cookies, setCookie, deleteCookie] = useCookies(['user']);

  const cookieInitalCheck = () => {
    if(cookies.token === undefined){
      // No Username
    }
    else{
      // username && get data from backend && set send data to redux
    }
    // console.log(cookies.username)
    // deleteCookie('username')
  }



  useEffect(() => {
    cookieInitalCheck()
  }, [])



  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;

// PathName refer Readme.md
