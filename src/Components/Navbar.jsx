import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../Store/theme-slice";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const themeToggleHandler = () => {
    setTimeout(() => {
      dispatch(themeActions.toggleTheme());
    }, 500);
    props.themeChangeAnimationHandler();
  };

  return (
    <nav className="w-full bg-white shadow-lg flex flex-row px-12 py-2 justify-between font-cairo flex-none z-[105] dark:bg-black">
      <div className="flex flex-row items-center">
        <div className="w-12">
          <img src={logo} alt="CPC Logo" className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-3xl text-black dark:text-white">
            CPC
          </div>
          <div className="text-primary text-xs">{`Codechef <PCCOE> Chapter`}</div>
        </div>
      </div>
      <div className="flex justify-center items-center dark:text-white">
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
      <div className="flex flex-row justify-center items-center gap-10 font-normal dark:text-white">
        <div onClick={themeToggleHandler} className="cursor-pointer">
          {/* <BsSearch className="inline" /> */}
          {!darkTheme && <MdDarkMode className="inline" />}
          {darkTheme && <FiSun className="inline" />}
        </div>
        <p>|</p>
        <ul className="flex flex-row gap-12 font-medium">
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
