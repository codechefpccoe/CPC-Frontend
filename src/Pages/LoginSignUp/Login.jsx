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
import { useSelector } from "react-redux";
import { auth } from "../../Config/Firebase";
import Logo from "../../Images/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import useInput from "../../Hooks/use-input";
import { googleLoginWithPopup } from "../../Config/Firebase";
import LoginVdo from "../../Assets/1.mp4";
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

  const userLoginWithGoogle = async () => {
    
    const response = await googleLoginWithPopup()
    
    
     
  };
  console.log(auth.currentUser);
  

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
    <div className="relative min-w-[300px] w-screen h-screen ">
      <video
        src={LoginVdo}
        type="video/mp4"
        loop
        autoPlay
        muted
        className="w-full h-full object-fill "
      ></video>
      <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper ">
        <div className=" md:w-375 flex flex-col rounded-2xl backdrop-blur-lg">
          <div className="text-center mt-4 p-2 ">
            <div className="flex items-center justify-center ">
              <img src={Logo} alt="Logo" className="h-20 w-20" />
            </div>
            <h2 className="font-bold text-3xl tracking-tight ">Login to CPC</h2>
            {/* <div className="p-1">
              <span class="text-sm font-bold">or </span>
              <span className="text-sm font-bold text-blue-500 hover:text-blue-300 cursor-pointer">
                Register a New Account
              </span>
            </div> */}
          </div>

          <form
            className="w-full max-w-xl p-2 backdrop-blur-lg"
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
                    onChange={enteredUsernameChangeHandler}
                    onBlur={enteredUsernameBlurHandler}
                    value={enteredUsername}
                    // className={`appearance-none block w-full text-gray-700 [ bg-black/20 focus:bg-black/25 ] font-medium border rounded-lg py-3 px-3 leading-tight ${
                    //   enteredUsernameHasError
                    //     ? "border-red-600 bg-red-100"
                    //     : "border-gray-400 bg-white"
                    // }`}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    ${
                      enteredUsernameHasError
                        ? "[ bg-red-50 focus:bg-black/25 ] "
                        : "[ bg-black/20 focus:bg-black/25 ]"
                    }
                    [ text-[#333] focus:text-black ]`}
                    type="text"
                    placeholder="Username"
                  ></input>
                </label>
                {/* {enteredUsernameHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Username.
                  </p>
                )} */}
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
                    onChange={enteredPasswordChangeHandler}
                    onBlur={enteredPasswordBlurHandler}
                    value={enteredPassword}
                    // className={`appearance-none block w-full [ bg-black/20 focus:bg-black/25 ] text-gray-700 font-medium border  rounded-lg py-3 px-3 leading-tight ${
                    //   enteredPasswordHasError
                    //     ? "border-red-600 bg-red-100"
                    //     : "border-gray-400 bg-white"
                    // }`}
                    className={`form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    ${
                      enteredPasswordHasError
                        ? "[ bg-red-50 focus:bg-black/25 ] "
                        : "[ bg-black/20 focus:bg-black/25 ]"
                    }
                    [ text-[#333] focus:text-black ]`}
                    type="password"
                    placeholder="Password"
                  />
                </label>
                {/* {enteredPasswordHasError && (
                  <p className="text-red-500 text-xs italic">
                    *Please Enter a valid Password.
                  </p>
                )} */}
              </div>

              {/* <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label for="remember" className="flex items-center w-1/2">
                  <input type="checkbox" className="mr-1 bg-white shadow" />
                  <span className="text-sm text-gray-700 dark:text-white">
                    Remember Me
                  </span>
                </label>
                <div className="w-1/2 text-right">
                  <p className="text-blue-500 font-bold text-sm tracking-tight hover:text-blue-300 cursor-pointer">
                    Forget your password?
                  </p>
                </div>
              </div> */}
              <div className="w-full md:w-full px-3 mb-2 flex flex-row gap-1">
                <button
                  className="appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight   [ transform transition hover:-translate-y-1 ]
                     bg-black cursor-pointer hover:bg-white hover:border-black hover:text-black"
                >
                  Sign up
                </button>
                <button
                  className={`appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition hover:-translate-y-1 ]  ${
                    formIsValid
                      ? "bg-black cursor-pointer hover:bg-white hover:border-black hover:text-black"
                      : "bg-gray-800"
                  }`}
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
                <button onClick={() => userLoginWithGoogle() } className="relative appearance-none w-full text-base flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white cursor-pointer hover:bg-black hover:text-white hover:shadow-md duration-500 ease-in-out transition-all border border-black group-hover:text-gray-100">
                  <FcGoogle className="h-6 w-6" />
                  Google
              {/* <div className="mx-auto -mb-6 pb-8">
                <span className="text-center text-xs text-gray-700 dark:text-white">
                  or sign up with
                </span>
              </div> */}
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-1 " />
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-gray-200 rounded-2xl left-1/2  ">
                  or
                </span>
              </div>

              <div className="w-full md:w-full px-3 mb-4 mt-1 [ w-10 h-10 ] [ flex flex-row justify-center items-center ]">
                <button
                  onClick={() => googleLoginWithPopup()}
                  className="relative appearance-none w-auto text-base flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white cursor-pointer hover:bg-blue-400 hover:border-white hover:text-white hover:shadow-md duration-500 ease-in-out transition-all border border-black group-hover:text-gray-100 [ transform transition hover:-translate-y-1 ]"
                  // className="rounded-full p-2 bg-blue-300 hover:shadow-lg hover:bg-blue-500
                  // [ transform transition hover:-translate-y-1 ]"
                >
                  <FcGoogle className="h-6 w-6" /> Sign in with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
