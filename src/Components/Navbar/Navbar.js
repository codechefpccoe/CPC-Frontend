import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assests/logo.png";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md flex flex-row px-12 py-2 justify-between font-cairo flex-none">
      <div className="flex flex-row items-center">
        <div className="w-12">
          <img src={logo} alt="CPC Logo" className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-3xl text-black">CPC</div>
          <div className="text-primary text-xs">{`Codechef <PCCOE> Chapter`}</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex flex-row gap-12 font-medium">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Roadmap to CP
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 font-normal">
        <div>
          <BsSearch className="inline" />
        </div>
        <p>|</p>
        <button>Sign up</button>
        <button>Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
