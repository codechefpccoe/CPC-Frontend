import React, { useRef } from "react";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { createUserWithUsernamePassword, db } from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/login-slice";
import firebase from "firebase";
import { errornotify } from "../../Components/Notify";

export const SignUp = () => {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const name = useRef();
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const userSignUp = async () => {
    await createUserWithUsernamePassword(
      email.current.value,
      password.current.value
    )
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: name.current.value,
        });
        naviagte("/login");
      })
      .catch((err) => {
        errornotify(err.message);
      });
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-4 form-wrapper "
      onClick={(e) => e.stopPropagation()}
      style={{ animation: "dropTop .3s linear" }}
    >
      <div className="md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="text-center mt-4 p-2">
          <h2 className="font-bold text-3xl tracking-tight ">Sign Up to CPC</h2>
        </div>

        <form
          className="w-full max-w-xl   p-2 rounded-2xl"
          // onSubmit={formSubmissionHandler}
        >
          <div className="flex flex-wrap mx-3 mb-4">
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-row gap-2">
                <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                  <MdDriveFileRenameOutline
                    className="label-icon 
                    transition pointer-events-none
                    [ w-6 h-6 ] 
                    [ absolute top-1/2 left-3 ] 
                    [ transform -translate-y-1/2 ]"
                  />
                  <input
                    id="firstname"
                    // onChange={enteredUsernameChangeHandler}
                    // onBlur={enteredUsernameBlurHandler}
                    // value={enteredUsername}
                    className={`form-input 
                      block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                      [ transition-colors duration-200 ] 
                      [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                      [ bg-black/20 focus:bg-black/25 ]
                      [ text-[#333]  focus:text-black ]`}
                    // ${
                    //   enteredUsernameHasError
                    //     ? "border-red-600 bg-red-300"
                    //     : "border-gray-400 bg-white"
                    // }`

                    type="text"
                    placeholder="Firstname"
                    ref={email}
                  />
                  {/* {enteredUsernameHasError && (
                    <p className="text-red-500 text-xs italic">
                      *Please Enter a valid Username.
                    </p>
                  )} */}
                </label>
                <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                  <MdOutlineDriveFileRenameOutline
                    className="label-icon 
                    transition pointer-events-none
                    [ w-6 h-6 ] 
                    [ absolute top-1/2 left-3 ] 
                    [ transform -translate-y-1/2 ]"
                  />
                  <input
                    id="firstname"
                    // onChange={enteredUsernameChangeHandler}
                    // onBlur={enteredUsernameBlurHandler}
                    // value={enteredUsername}
                    className={`form-input 
                      block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                      [ transition-colors duration-200 ] 
                      [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                      [ bg-black/20 focus:bg-black/25 ]
                      [ text-[#333]  focus:text-black ]`}
                    // ${
                    //   enteredUsernameHasError
                    //     ? "border-red-600 bg-red-300"
                    //     : "border-gray-400 bg-white"
                    // }`

                    type="text"
                    placeholder="Lastname"
                    ref={email}
                  />
                  {/* {enteredUsernameHasError && (
                    <p className="text-red-500 text-xs italic">
                      *Please Enter a valid Username.
                    </p>
                  )} */}
                </label>
              </div>
            </div>
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
                    [ text-[#333]  focus:text-black ]`}
                  // ${
                  //   enteredUsernameHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`

                  type="text"
                  placeholder="Email"
                  ref={email}
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
                    [ text-[#333]  focus:text-black ]`}
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
                <RiLockPasswordFill
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
                    [ text-[#333]  focus:text-black ]`}
                  // ${
                  //   enteredPasswordHasError
                  //     ? "border-red-600 bg-red-300"
                  //     : "border-gray-400 bg-white"
                  // }`}
                  type="password"
                  placeholder="Password"
                  ref={password}
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
                    [ text-[#333]  focus:text-black ]`}
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
              <div className="flex flex-row gap-1">
                <button
                  className="appearance-none block w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
                  onClick={() => userSignUp()}
                >
                  Sign Up
                </button>

                <NavLink
                  to="/login"
                  className="appearance-none flex items-center justify-center w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
                >
                  Back
                  <FaArrowRight className="w-6 l-4 " />
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Confirm Password Code

{
  /* <div className="w-full md:w-full px-3 mb-3">
              <label className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">
                <RiLockPasswordLine
                  className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                />

                <input
                  id="passwordc"
                  onChange={enteredPasswordChangeHandler}
                  onBlur={enteredPasswordBlurHandler}
                  value={enteredPassword}
                  className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ]
                    [ text-[#333] focus:text-black ]`}
                  ${
                    enteredPasswordHasError
                      ? "border-red-600 bg-red-300"
                      : "border-gray-400 bg-white"
                  }`}
                  type="password"
                  placeholder="Confirm Password"
                />
                {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )}
              </label>
            </div> */
}
