import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../Store/theme-slice";
import { useState } from "react";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const userData = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [animationClasses, setAnimationClasses] = useState("");
  const themeClasses = `absolute left-0 dark_theme ${animationClasses}`;

  const themeChangeAnimationHandler = () => {
    if (animationClasses === "" && !darkTheme) {
      setAnimationClasses("hover bg-black");
      setTimeout(() => {
        setAnimationClasses("");
      }, 500);
    } else {
      setAnimationClasses("hover bg-white");
      setTimeout(() => {
        setAnimationClasses("");
      }, 500);
    }
  };

  const themeToggleHandler = () => {
    setTimeout(() => {
      dispatch(themeActions.toggleTheme());
    }, 500);
    themeChangeAnimationHandler();
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <div className={themeClasses}></div>
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
            {!darkTheme && <MdDarkMode className="inline" />}
            {darkTheme && <FiSun className="inline" />}
          </div>
          <p>|</p>
          <button onClick={signupHandler}>Sign up</button>
          <button onClick={loginHandler}>Log In</button>
        </div>
        <p>|</p>
        {userData.email === -1 ? (
          <>
            <ul className="flex flex-row gap-12 font-medium">
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </ul>
          </>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => navigate("/user/" + userData.username)}
          >
            Hi {userData.name}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
