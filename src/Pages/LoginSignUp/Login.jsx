import Logo from "../../Images/logo.png";
import { FcGoogle } from "react-icons/fc";
import useInput from "../../Hooks/use-input";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { googleLoginUsingPopup } from "../../Config/Firebase";
import { db } from "../../Config/Firebase";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserWithUsernamePassword } from "../../Config/Firebase";
import { useDispatch } from "react-redux";
import { IfUsernameAlreadyPresent } from "../../Config/DBFunc";
import { loginAction } from "../../Store/login-slice";
import { message } from "antd";


export const Login = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState();
  let regex = /^[*|\":<>[\]{}`\\()';@&$%#!]+$/;
  const [name, setname] = useState();
  // func -> axios -> backend -> axios -> func -> redux -> cookie -> redirect

  // const [cookies, setCookie] = useCookies();
  // const enteredUsernameHasError = true;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
  } = useInput((value) => value.trim().length > 6 && value.includes("@") &&
  value.includes(".") );

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlurHandler: enteredPasswordBlurHandler,
  } = useInput((value) => value.trim().length > 1);

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: enteredUsernameHasError,
    valueChangeHandler: enteredUsernameChangeHandler,
    inputBlurHandler: enteredUsernameBlurHandler,
  } = useInput(
    (value) =>
    value.trim().length <= 15 &&
      value.trim().length >= 3 &&
      !value.includes(" ") &&
      !value.includes(".") &&
      regex.test(value)
  );

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const userLoginWithGoogle = async () => {
    const response = await googleLoginUsingPopup();
    if (response) {
      db.collection("user")
        .doc(response.email)
        .get()
        .then((snap) => {
          if (!snap.exists) {
            setShowPopUp(true);
          } else {
            db.collection("user")
              .doc(response.email)
              .get()
              .then((resp) => {
                message.success("Login Successfull");
                navigate("/user/" + resp.data().username);
              });
          }
        });
    }
  };

  const userLoginwithEmailPassword = async () => {
    await loginUserWithUsernamePassword(enteredEmail, enteredPassword)
      .then((user) => {
        db.collection("user")
          .doc(user.email)
          .get()
          .then((snap) => {
            if (!snap.exists) {
              setShowPopUp(true);
              setemail(user.email);
              setname(user.displayName);
            } else {
              db.collection("user")
                .doc(user.email)
                .get()
                .then((resp) => {
                  message.success("Login Successfull");
                  navigate("/user/" + resp.data().username);
                });
            }
          });
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const setInitailValue = async () => {
    if (await IfUsernameAlreadyPresent(enteredUsername)) {
      alert("Username Already Present");
    } else {
      db.collection("user")
        .doc(email)
        .set({
          coins: 10,
          username: enteredUsername,
          email: email,
          name: name,
        })
        .then(() => {
          setShowPopUp(false);
          dispatch(
            loginAction.addLogin({
              name: name,
              email: email,
              username: enteredUsername,
              coins: 10,
            })
          );
          navigate("/user/" + enteredUsername);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper ">
      <Popup open={showPopUp} closeOnDocumentClick>
        <div className="p-4 ">
          <p className="text-center font-bold p-4 font-['sans-serif']">
            Enter an username for your account
          </p>
          <div className="w-full flex items-center flex-col gap-3">
            <input
              onChange={enteredUsernameChangeHandler}
              onBlur={enteredUsernameBlurHandler}
              value={enteredUsername}
              className={`form-input 
              block w-72 rounded-lg leading-none focus:outline-none placeholder-black/50 
              [ transition-colors duration-200 ] 
              ${
                enteredUsernameHasError
                  ? "[ bg-red-50 focus:bg-black/25 ] "
                  : "[ bg-black/20 focus:bg-black/25 ]"
              }
              [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-4 ] `}
              placeholder="[No spaces allowed]"
            />
            <button
              onClick={() => setInitailValue()}
              className={` appearance-none block w-48 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ]  ${
                !enteredUsernameHasError
                  ? "bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
                  : "bg-gray-800"
              }`}
              disabled={!enteredUsernameIsValid}
            >
              SET
            </button>
          </div>
        </div>
      </Popup>
      <div className=" md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="text-center mt-4 p-2 ">
          <div className="flex items-center justify-center ">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="font-bold text-3xl tracking-tight ">Login to CPC</h2>
        </div>

        <div className="w-full max-w-xl p-2 ">
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
                    [ text-[#333] focus:text-black ]`}
                  type="text"
                  placeholder="Email"
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
                <span className="text-sm text-gray-700 ">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <p className="text-blue-500 font-bold text-sm tracking-tight hover:text-blue-300 cursor-pointer">
                  Forget your password?
                </p>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-2 flex flex-row gap-1">
              <NavLink
                className="flex justify-center items-center appearance-none w-full text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition hover:-translate-y-1 ] active:bg-blue-200 bg-black cursor-pointer hover:bg-white hover:border-black hover:text-black"
                to="/signup"
              >
                Sign up
              </NavLink>
              <button
                className={` appearance-none block w-full  text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ]  ${
                  formIsValid
                    ? "bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
                    : "bg-gray-800"
                }`}
                disabled={!formIsValid}
                onClick={() => userLoginwithEmailPassword()}
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

            <div className="w-full md:w-full px-3 mb-6 mt-6  [ flex flex-row justify-center items-center ]">
              <button
                onClick={() => userLoginWithGoogle()}
                className="absolute appearance-none w-auto text-base flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white cursor-pointer hover:bg-blue-400 hover:border-white hover:text-white hover:shadow-md duration-500 ease-in-out transition-all border border-black group-hover:text-gray-100 [ transform transition hover:-translate-y-1 ]"
              >
                <FcGoogle className="h-6 w-6" /> Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
