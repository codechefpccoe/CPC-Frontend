import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <div className="p-10 flex flex-col w-2/6">
        <input className="border" placeholder="Email" />
        <input className="border" placeholder="Username" />
        <input className="border" placeholder="Password" />
        <div className="flex gap-5">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>

        <button className="border">Sign Up</button>
        <Link to="/login" className="border">
          Login
        </Link>
      </div>
    </div>  
  );
};
