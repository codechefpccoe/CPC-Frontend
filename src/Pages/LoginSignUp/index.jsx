import React, { useState } from "react";
import imgbckgrd from "../../Images/loginImage.webp";
import LoginVdo from "../../Assets/1.webm";
import { ForgetPassword } from "./ForgetPassword";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { useDispatch } from "react-redux";
import { loaderAction } from "../../Store/loader-slice";

const LoginSignUp = () => {
  const [first, setFirst] = useState(false);
  const dispatch = useDispatch();
  if (first === false) {
    dispatch(loaderAction.changeLoaderStateTrue());
  }
  return (
    <div className="relative min-w-[300px] w-screen h-screen ">
      <img
        src={imgbckgrd}
        alt=""
        onLoadedData={() => {
          dispatch(loaderAction.changeLoaderStateFalse());
          setFirst(true);
        }}
        className="w-full h-full card-zoom-image overflow-hidden md:hidden contrast-125 brightness-75"
      />

      <video
        src={LoginVdo}
        type="video/mp4"
        loop
        autoPlay
        muted
        onLoadedData={() => {
          dispatch(loaderAction.changeLoaderStateFalse());
          setFirst(true);
        }}
        className="w-full h-full object-fill max-md:hidden contrast-125 brightness-75"
      />

      {window.location.pathname === "/login" && <Login />}
      {window.location.pathname === "/signup" && <SignUp />}
      {window.location.pathname === "/forgetpassword" && <ForgetPassword />}
    </div>
  );
};

export default LoginSignUp;
