import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useRef } from "react";
import axios from "axios";
import Logo from "../../Images/logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const SignUp = () => {
  const username = useRef();
  const password = useRef();
  const email = useRef();

  const userSignUp = async () => {
    const userData = {
      userName: username.current.value,
      password: password.current.value,
      email: email.current.value,
    };
    const res = await axios.post(
      "http://localhost:8000/api/v1.0/User/Signup",
      userData
    );
    console.log(res);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper ">
      <div className="md:w-[400px] flex flex-col rounded-2xl bg-white border-[2px] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)] border-black">
        <div className="text-center mt-4 p-2">
          <div className="flex items-center justify-center ">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="font-bold text-3xl tracking-tight dark:text-white">
            Sign Up to CPC
          </h2>
        </div>

        <form
          className="w-full max-w-xl bg-white dark:bg-black p-2 rounded-2xl"
          // onSubmit={formSubmissionHandler}
        >
          <div className="flex flex-wrap mx-3 mb-4">
            <div className="w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                <MdAlternateEmail
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />
                <input
                  id="email"
                  // onChange={enteredUsernameChangeHandler}
                  // onBlur={enteredUsernameBlurHandler}
                  // value={enteredUsername}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  // ${
                  //   enteredUsernameHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`

                  type="text"
                  placeholder="Email"
                />
                {/* {enteredUsernameHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Username.
                  </p>
                )} */}
              </label>
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                <BiUserCircle
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />
                <input
                  id="username"
                  // onChange={enteredUsernameChangeHandler}
                  // onBlur={enteredUsernameBlurHandler}
                  // value={enteredUsername}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  // ${
                  //   enteredUsernameHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`

                  type="text"
                  placeholder="Username"
                />
                {/* {enteredUsernameHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Username.
                  </p>
                )} */}
              </label>
            </div>

            <div className="w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                <RiLockPasswordLine
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />
                <input
                  id="password"
                  // onChange={enteredPasswordChangeHandler}
                  // onBlur={enteredPasswordBlurHandler}
                  // value={enteredPassword}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  // ${
                  //   enteredPasswordHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`}
                  type="password"
                  placeholder="Password"
                />
                {/* {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )} */}
              </label>
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                <RiLockPasswordLine
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />

                <input
                  id="password"
                  // onChange={enteredPasswordChangeHandler}
                  // onBlur={enteredPasswordBlurHandler}
                  // value={enteredPassword}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  // ${
                  //   enteredPasswordHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`}
                  type="password"
                  placeholder="Confirm Password"
                />
                {/* {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )} */}
              </label>
            </div>

            <div className="w-full md:w-full px-3 mb-2">
              <button
                className="appearance-none block w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
                // disabled={!formIsValid}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
