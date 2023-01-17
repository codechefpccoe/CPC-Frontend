import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";


export const SignUp = () => {

  const username = useRef();
  const password = useRef();
  const email = useRef();


  const userSignUp = () => {
      // After Response
      // Redirect to /login 
  }


  return (
    <div>
      <div className="p-10 flex flex-col w-2/6">
        <input ref = {email} className="border" placeholder="Email" />
        <input ref = {username}className="border" placeholder="Username" />
        <input red = {password} className="border" placeholder="Password" />
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
