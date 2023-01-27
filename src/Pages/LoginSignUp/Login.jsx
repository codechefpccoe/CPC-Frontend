import React from "react";
import Logo from "../../Images/logo.png";
import { FcGoogle } from "react-icons/fc";
import useInput from "../../Hooks/use-input";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { googleLoginUsingPopup } from "../../Config/Firebase";
import { db } from "../../Config/Firebase";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setemail] = useState("");
  const username = useRef();
  const navigate = useNavigate()
  // func -> axios -> backend -> axios -> func -> redux -> cookie -> redirect

  // const [cookies, setCookie] = useCookies();
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
    const response = await googleLoginUsingPopup();
    db.collection("user")
      .doc(response.email)
      .get()
      .then((snap) => {
        if (!snap.exists) {
          setShowPopUp(true);
          setemail(response.email);
        }
        else{
          db.collection("user").doc(response.email).get().then(resp => {
            navigate("/user/" + resp.data().username)
          })
        }
      });
  };

  const setInitailValue = async () => {
    db.collection("user")
      .where("username", "==", username.current.value)
      .get()
      .then((snap) => {
        if (!snap.empty) {
          alert("username already exists!!!!");
        } else {
          db.collection("user")
            .doc(email)
            .set({
              coins: 10,
              username: username.current.value,
            })
            .then(() => {
              console.log("Data set success!!!");
              setShowPopUp(false);
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper ">
      <Popup open={showPopUp} closeOnDocumentClick>
        <div className="p-4">
          <p className="text-center">Enter an username for your account!!!</p>
          <div className="w-full flex items-center flex-col gap-3">
            <input
              ref={username}
              className="border-black border-[2px] rounded-md"
            />
            <button
              onClick={() => setInitailValue()}
              className="border-black border-[2px] px-3"
            >
              SET
            </button>
          </div>
        </div>
      </Popup>
      <div className=" md:w-[400px] flex flex-col rounded-2xl bg-white border-[2px] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)] border-black">
        <div className="text-center mt-4 p-2 ">
          <div className="flex items-center justify-center ">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="font-bold text-3xl tracking-tight ">Login to CPC</h2>
        </div>

        <form className="w-full max-w-xl p-2 " onSubmit={formSubmissionHandler}>
          <div className="flex flex-wrap mx-3 mb-4">
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
                  onChange={enteredUsernameChangeHandler}
                  onBlur={enteredUsernameBlurHandler}
                  value={enteredUsername}
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
            </div>

            <div className="w-full flex items-center justify-between px-3 mb-3 ">
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
            </div>
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

            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-64 h-1 my-8 bg-gray-200 border-1 " />
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-gray-200 rounded-2xl left-1/2  ">
                or
              </span>
            </div>

            <div className="w-full md:w-full px-3 mb-4 mt-1 [ w-10 h-10 ] [ flex flex-row justify-center items-center ]">
              <button
                onClick={() => userLoginWithGoogle()}
                className="relative appearance-none w-auto text-base flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white cursor-pointer hover:bg-blue-400 hover:border-white hover:text-white hover:shadow-md duration-500 ease-in-out transition-all border border-black group-hover:text-gray-100 [ transform transition hover:-translate-y-1 ]"
              >
                <FcGoogle className="h-6 w-6" /> Sign in with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
