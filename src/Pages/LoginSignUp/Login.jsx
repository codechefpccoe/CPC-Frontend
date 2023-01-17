import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { loginAction } from "../../Store/login-slice";
import { useCookies } from 'react-cookie';

export const Login = () => {
  // func -> axios -> backend -> axios -> func -> redux -> cookie -> redirect
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const [cookies, setCookie] = useCookies();

  const userLogin = async () => {
    console.log("Adding");
    dispatch(
      loginAction.addLogin({
        name: "Dummy Name",
        username: username.current.value,
      })
    );
    setCookie('username', username.current.value, { path: '/' });
  };




  return (
    <div className="p-10 flex flex-col w-2/6">
      <input
        ref={username}
        className="border"
        placeholder="Username or Email"
      />
      <input ref={password} className="border" placeholder="Password" />
      <div className="flex gap-5">
        <input type="checkbox" />
        <p>Remember me</p>
      </div>

      <button onClick={() => userLogin()} className="border">
        Login In
      </button>
      <Link to="/signup" className="border">
        Sign Up
      </Link>
    </div>
  );
};
