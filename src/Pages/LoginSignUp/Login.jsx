import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { loginAction } from "../../Store/login-slice";
import { useCookies } from "react-cookie";
import DarkGrid from "../../Assets/DarkGrid.mp4";
import Logo from "../../Images/logo.png";
import { FcGoogle } from "react-icons/fc";
import useInput from "../../Hooks/use-input";
import { googleLoginWithPopup } from "../../Config/Firebase";

export const Login = () => {
  // func -> axios -> backend -> axios -> func -> redux -> cookie -> redirect
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies();
  // const enteredUsernameHasError = true;

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: enteredUsernameHasError,
    valueChangeHandler: enteredUsernameChangeHandler,
    inputBlurHandler: enteredUsernameBlurHandler,
    reset: resetEnteredUsername,
  } = useInput((value) => value.trim().length > 3);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlurHandler: enteredPasswordBlurHandler,
    reset: resetPasswordHandler,
  } = useInput((value) => value.trim().length > 8);

  let formIsValid = false;

  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEnteredUsername();
    resetPasswordHandler();
  };

  const userLogin = async () => {
    console.log("Adding");
    dispatch(
      loginAction.addLogin({
        name: "Dummy Name",
        username: enteredUsername.current.value,
      })
    );
    setCookie("username", enteredPassword.current.value, { path: "/" });
  };

  return (
    <div className="relative w-screen h-screen ">
      <video
        src={DarkGrid}
        type="video/mp4"
        autoPlay
        loop
        className="w-full h-full object-fill"
      ></video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" md:w-460 bg-white rounded-xl flex flex-col border-2 border-black shadow-2xl ">
          <div className="text-center mt-4 p-2">
            <div className="flex items-center justify-center">
              <img src={Logo} alt="Logo" className="h-20 w-20" />
            </div>
            <h2 className="text-4xl tracking-tight">Login to CPC</h2>
            <div className="p-1">
              <span class="text-sm">or </span>
              <span className="text-sm text-blue-500">
                register a new account
              </span>
            </div>
          </div>

          <form
            className="w-full max-w-xl bg-white rounded-lg shadow-md p-2"
            onSubmit={formSubmissionHandler}
          >
            <div className="flex flex-wrap mx-3 mb-4">
              <div className="w-full md:w-full px-3 mb-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Username
                </label>
                <input
                  id="username"
                  onChange={enteredUsernameChangeHandler}
                  onBlur={enteredUsernameBlurHandler}
                  value={enteredUsername}
                  className={`appearance-none block w-full text-gray-900 font-medium border rounded-lg py-3 px-3 leading-tight ${
                    enteredUsernameHasError
                      ? "border-red-600 bg-red-100"
                      : "border-gray-400 bg-white"
                  }`}
                  type="text"
                />
                {enteredUsernameHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Username.
                  </p>
                )}
              </div>
              <div className="w-full md:w-full px-3 mb-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  onChange={enteredPasswordChangeHandler}
                  onBlur={enteredPasswordBlurHandler}
                  value={enteredPassword}
                  className={`appearance-none block w-full  text-gray-900 font-medium border  rounded-lg py-3 px-3 leading-tight ${
                    enteredPasswordHasError
                      ? "border-red-600 bg-red-100"
                      : "border-gray-400 bg-white"
                  }`}
                  type="password"
                />
                {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )}
              </div>
              <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label for="remember" className="flex items-center w-1/2">
                  <input type="checkbox" className="mr-1 bg-white shadow" />
                  <span className="text-sm text-gray-700">Remember Me</span>
                </label>
                <div className="w-1/2 text-right">
                  <p className="text-blue-500 text-sm tracking-tight">
                    Forget your password?
                  </p>
                </div>
              </div>
              <div className="w-full md:w-full px-3 mb-2">
                <button
                  className="appearance-none block w-full bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black"
                  disabled={!formIsValid}
                >
                  Login
                </button>
              </div>
              <div className="mx-auto -mb-6 pb-8">
                <span className="text-center text-xs text-gray-700">
                  or sign up with
                </span>
              </div>
              <div className="w-full md:w-full px-3 mb-4 mt-2 ">
                <button onClick={() => googleLoginWithPopup() } className="relative appearance-none w-full text-base flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white cursor-pointer hover:bg-black hover:text-white hover:shadow-md duration-500 ease-in-out transition-all border border-black group-hover:text-gray-100">
                  <FcGoogle className="h-6 w-6" />
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
