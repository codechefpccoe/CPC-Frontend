import React from "react";
import LoginVdo from "../../Assets/1.mp4";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const LoginSignUp = () => {
  return (
    <div className="relative min-w-[300px] w-screen h-screen ">
      <video
        src={LoginVdo}
        type="video/mp4"
        loop
        autoPlay
        muted
        className="w-full h-full object-fill "
      ></video>
      {window.location.pathname === "/login" && <Login />}
      {window.location.pathname === "/signup" && <SignUp />}
    </div>
  );
};

export default LoginSignUp;
