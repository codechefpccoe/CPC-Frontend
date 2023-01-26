import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import Logo from "../../Images/logo.png";

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
    <div className=" md:w-460 bg-white dark:bg-black flex flex-col shadow-lg">
      <div className="text-center mt-4 p-2">
        <div className="flex items-center justify-center ">
          <img src={Logo} alt="Logo" className="h-20 w-20" />
        </div>
        <h2 className="font-bold text-3xl tracking-tight dark:text-white">
          Sign Up to CPC
        </h2>
      </div>

      <form
        className="w-full max-w-xl bg-white dark:bg-black p-2"
        // onSubmit={formSubmissionHandler}
      >
        <div className="flex flex-wrap mx-3 mb-4">
          <div className="w-full md:w-full px-3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">
              *Username
            </label>
            <input
              id="username"
              // onChange={enteredUsernameChangeHandler}
              // onBlur={enteredUsernameBlurHandler}
              // value={enteredUsername}
              className="appearance-none block w-full text-gray-900  font-medium border rounded-lg py-3 px-3 leading-tight "
              // ${
              //   enteredUsernameHasError
              //     ? "border-red-600 bg-red-300"
              //     : "border-gray-400 bg-white"
              // }`

              type="text"
            />
            {/* {enteredUsernameHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Username.
                  </p>
                )} */}
          </div>
          <div className="w-full md:w-full px-3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">
              *Password
            </label>
            <input
              id="password"
              // onChange={enteredPasswordChangeHandler}
              // onBlur={enteredPasswordBlurHandler}
              // value={enteredPassword}
              className="appearance-none block w-full  text-gray-900 font-medium border  rounded-lg py-3 px-3 leading-tight"
              // ${
              //   enteredPasswordHasError
              //     ? "border-red-600 bg-red-300"
              //     : "border-gray-400 bg-white"
              // }`}
              type="password"
            />
            {/* {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )} */}
          </div>
          <div className="w-full md:w-full px-3 mb-3">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">
              *Confirm Password
            </label>
            <input
              id="password"
              // onChange={enteredPasswordChangeHandler}
              // onBlur={enteredPasswordBlurHandler}
              // value={enteredPassword}
              className="appearance-none block w-full  text-gray-900 font-medium border  rounded-lg py-3 px-3 leading-tight"
              // ${
              //   enteredPasswordHasError
              //     ? "border-red-600 bg-red-300"
              //     : "border-gray-400 bg-white"
              // }`}
              type="password"
            />
            {/* {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )} */}
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
  );
};
