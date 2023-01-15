import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/LoginSignUp/Login";
import { SignUp } from "./Pages/LoginSignUp/SignUp";


const App = () => {
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
