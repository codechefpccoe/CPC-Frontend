import React from "react";
import { NavLink } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  createUserWithUsernamePassword,
  sendVerificationEmail,
} from "../../Config/Firebase";
import { useNavigate } from "react-router-dom";
import useInput from "../../Hooks/use-input";
import firebase from "firebase";
import Logo from "../../Images/logo.png";
import { message } from "antd";

export const SignUp = () => {
  let emailverified = true;
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
  } = useInput(
    (value) =>
      value.trim().length > 6 &&
      value.includes("@") &&
      value.includes(".") &&
      emailverified
  );

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: enteredFirstNameChangeHandler,
    inputBlurHandler: enteredFirstNameBlurHandler,
  } = useInput((value) => value.trim().length > 2);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: enteredLastNameBlurHandler,
  } = useInput((value) => value.trim().length > 2);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlurHandler: enteredPasswordBlurHandler,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: enteredCPassword,
    isValid: enteredCPasswordIsValid,
    hasError: enteredCPasswordHasError,
    valueChangeHandler: enteredCPasswordChangeHandler,
    inputBlurHandler: enteredCPasswordBlurHandler,
  } = useInput((value) => value.trim().length > 6 && value === enteredPassword);

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredCPasswordIsValid &&
    enteredLastNameIsValid &&
    enteredFirstNameIsValid
  ) {
    formIsValid = true;
  }

  const userSignUp = async () => {
    let userCred = false;
    await createUserWithUsernamePassword(enteredEmail, enteredPassword)
      .then((e) => {
        userCred = e;
        firebase.auth().currentUser.updateProfile({
          displayName: enteredFirstName.trim() + " " + enteredLastName.trim(),
        });
      })
      .catch((err) => {
        message.error(err.message);
      });
    if (userCred) {
      await sendVerificationEmail()
        .then((e) => {
          message.success("Email Verification mail send successfully");
          navigate("/login");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper ">
      <div className="md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="text-center mt-4 p-2">
          <div className="flex items-center justify-center ">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="font-bold text-3xl tracking-tight ">Sign Up to CPC</h2>
        </div>

        <div className="w-full max-w-xl p-2">
          <div className="flex flex-wrap mx-3 mb-4">
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                  <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                    <MdDriveFileRenameOutline
                      className="label-icon 
                    transition pointer-events-none
                    [ w-6 h-6 ] 
                    [ absolute top-1/2 left-3 ] 
                    [ transform -translate-y-1/2 ]"
                    />
                    <input
                      id="firstname"
                      onChange={enteredFirstNameChangeHandler}
                      onBlur={enteredFirstNameBlurHandler}
                      value={enteredFirstName}
                      className={`form-input 
                      block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                      [ transition-colors duration-200 ] 
                      [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                      [ text-[#333]  focus:text-black ]
                      ${
                        enteredFirstNameHasError
                          ? "[ bg-red-50 focus:bg-black/25 ] "
                          : "[ bg-black/20 focus:bg-black/25 ]"
                      }
                    `}
                      type="text"
                      placeholder="Firstname"
                    />
                  </label>
                  {enteredFirstNameHasError && (
                    <p className="text-red-500 text-xs italic ">
                      *Please Enter a valid Username.
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                    <MdOutlineDriveFileRenameOutline
                      className="label-icon 
                    transition pointer-events-none
                    [ w-6 h-6 ] 
                    [ absolute top-1/2 left-3 ] 
                    [ transform -translate-y-1/2 ]"
                    />
                    <input
                      id="lastname"
                      onChange={enteredLastNameChangeHandler}
                      onBlur={enteredLastNameBlurHandler}
                      value={enteredLastName}
                      className={`form-input 
                      block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                      [ transition-colors duration-200 ] 
                      [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                      ${
                        enteredLastNameHasError
                          ? "[ bg-red-50 focus:bg-black/25 ] "
                          : "[ bg-black/20 focus:bg-black/25 ]"
                      }
                      [ text-[#333]  focus:text-black ]
                   `}
                      type="text"
                      placeholder="Lastname"
                    />
                  </label>
                  {enteredLastNameHasError && (
                    <p className="text-red-500 text-xs italic">
                      *Please Enter a valid Username.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-col">
                <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                  <MdAlternateEmail
                    className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                  />
                  <input
                    id="email"
                    onChange={enteredEmailChangeHandler}
                    onBlur={enteredEmailBlurHandler}
                    value={enteredEmail}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    ${
                      enteredEmailHasError
                        ? "[ bg-red-50 focus:bg-black/25 ] "
                        : "[ bg-black/20 focus:bg-black/25 ]"
                    }
                    [ text-[#333]  focus:text-black ]
                  `}
                    type="text"
                    placeholder="Email"
                  />
                </label>
                {enteredEmailHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Email.
                  </p>
                )}
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-col">
                <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                  <RiLockPasswordFill
                    className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                  />
                  <input
                    id="password"
                    onChange={enteredPasswordChangeHandler}
                    onBlur={enteredPasswordBlurHandler}
                    value={enteredPassword}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    ${
                      enteredPasswordHasError
                        ? "[ bg-red-50 focus:bg-black/25 ] "
                        : "[ bg-black/20 focus:bg-black/25 ]"
                    }
                    [ text-[#333]  focus:text-black ]
                  `}
                    type="password"
                    placeholder="Password"
                  />
                </label>
                {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-3">
              <div className="flex flex-col">
                <label className="form-label relative block mb-1 text-black/50 focus-within:text-[#333]">
                  <RiLockPasswordLine
                    className="label-icon 
                  transition pointer-events-none
                  [ w-6 h-6 ] 
                  [ absolute top-1/2 left-3 ] 
                  [ transform -translate-y-1/2 ]"
                  />

                  <input
                    id="password"
                    onChange={enteredCPasswordChangeHandler}
                    onBlur={enteredCPasswordBlurHandler}
                    value={enteredCPassword}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    ${
                      enteredCPasswordHasError
                        ? "[ bg-red-50 focus:bg-black/25 ] "
                        : "[ bg-black/20 focus:bg-black/25 ]"
                    }
                    [ text-[#333]  focus:text-black ]
                  `}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </label>
                {enteredCPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Confirm Password.
                  </p>
                )}
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-2">
              <div className="flex flex-row gap-1">
                <button
                  className={`appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight ${
                    formIsValid
                      ? "bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
                      : "bg-gray-800"
                  }`}
                  disabled={!formIsValid}
                  onClick={() => userSignUp()}
                >
                  Sign Up
                </button>

                <NavLink
                  to="/login"
                  className="appearance-none flex items-center justify-center w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
