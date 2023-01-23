import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { loginAction } from "../../Store/login-slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

export const Login = () => {
  // func -> axios -> backend -> axios -> func -> redux -> cookie -> redirect
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const Navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        "http://localhost:8000/api/v1.0/User/GetUser"
      );
      if (resp.status === 200) {
        Navigate("/dashboard");
      }
    };
    getData();
  }, []);

  const userLogin = async () => {
    const data = {
      userName: username.current.value,
      password: password.current.value,
    };

    console.log(data);

    const resp = await axios.post(
      "http://localhost:8000/api/v1.0/User/Login",
      data
    );

    console.log(resp);
    if (resp.status === 200) {
      Navigate("/dashboard");
    }

    // dispatch(
    //   loginAction.addLogin({
    //     name: "Dummy Name",
    //     username: username.current.value,
    //   })
    // );
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
