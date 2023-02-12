import React from "react";
import Logo from "../../Images/logo.webp";
import useInput from "../../Hooks/use-input";
import { MdAlternateEmail } from "react-icons/md";
import { forgetPasswordWithEmail } from "../../Config/Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { loaderAction } from "../../Store/loader-slice";
import { useDispatch } from "react-redux";
import { message } from "antd";

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
  } = useInput(
    (value) =>
      value.trim().length > 6 && value.includes("@") && value.includes(".")
  );

  const recoverPassword = async () => {
    const response = await forgetPasswordWithEmail(enteredEmail);
    if (response) {
      dispatch(loaderAction.changeLoaderStateFalse());
      message.success("Email Sent Successfully");
      navigate("/login");
    } else {
      dispatch(loaderAction.changeLoaderStateFalse());
      message.error("Email not send");
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 form-wrapper">
      <div className="md:w-[400px] flex flex-col rounded-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div className="text-center mt-4 p-2">
          <div className="flex items-center justify-center ">
            <img src={Logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="font-bold text-3xl tracking-tight ">
            Forget Password?
          </h2>
        </div>
        <div className="w-full max-w-xl p-2 ">
          <div className="flex flex-wrap items-center justify-center mx-3 mb-4">
            <div className="flex items-center justify-center w-full md:w-full px-3 mb-3">
              <h1 className="w-[250px] text-center">
                Please enter your email address below and we will send you
                information to recover your password.
              </h1>
            </div>
            <div className="flex flex-col">
              <label className="form-label relative block mb-1 mt-4 text-black/50 focus-within:text-[#333]">
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
                    [ text-[#333] focus:text-black ]`}
                  type="text"
                  placeholder="Email"
                ></input>
              </label>
              {enteredEmailHasError && (
                <p className="text-red-500 text-xs italic">
                  *Please Enter a valid Email.
                </p>
              )}
            </div>
            <div className="flex flex-row gap-x-1">
              <NavLink
                className={` appearance-none block w-32 mt-4 text-gray-100 font-bold border text-center border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ] bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black`}
                to={"/login"}
              >
                Login
              </NavLink>
              <button
                className={` appearance-none block w-40 mt-4 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight [ transform transition  ]  ${
                  enteredEmailIsValid
                    ? "bg-black cursor-pointer hover:-translate-y-1 hover:bg-white hover:border-black hover:text-black"
                    : "bg-gray-800"
                }`}
                disabled={!enteredEmailIsValid}
                onClick={() => {
                  recoverPassword();
                  dispatch(loaderAction.changeLoaderStateTrue());
                }}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
