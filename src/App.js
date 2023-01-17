import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/LoginSignUp/Login";
import { SignUp } from "./Pages/LoginSignUp/SignUp";
import { useCookies } from 'react-cookie';


const App = () => {

  const [cookies, setCookie, deleteCookie] = useCookies(['user']);

  const cookieInitalCheck = () => {
    if(cookies.username === undefined){
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
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;

// PathName refer Readme.md 
