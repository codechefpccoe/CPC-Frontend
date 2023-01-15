import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="p-10 flex flex-col w-2/6">
      <input className="border" placeholder="Username or Email" />
      <input className="border" placeholder="Password" />
      <div className="flex gap-5">
        <input type="checkbox" />
        <p>Remember me</p>
      </div>

      <button className="border">Login In</button>
      <Link to = "/signup" className="border">Sign Up</Link>
    </div>
  );
};
