import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios"


export const SignUp = () => {

  const username = useRef();
  const password = useRef();
  const email = useRef();


  const userSignUp = async () => {

      const data = {
        userName : username.current.value,
        password : password.current.value,
        email : email.current.value
      }

      console.log(data)

      const resp = await axios.post("http://localhost:8000/api/v1.0/User/Signup", data)

      console.log(resp)
  }


  return (
    <div>
      <div className="p-10 flex flex-col w-2/6">
        <input ref = {email} className="border" placeholder="Email" />
        <input ref = {username}className="border" placeholder="Username" />
        <input ref = {password} className="border" placeholder="Password" />
        <div className="flex gap-5">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <button onClick = {() => userSignUp()} className="border">Sign Up</button>
        <Link to="/login" className="border">
          Login
        </Link>
      </div>
    </div>  
  );
};
