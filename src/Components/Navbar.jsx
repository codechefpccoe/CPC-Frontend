import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../Store/theme-slice";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { RiTeamFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { MdDarkMode, MdEventNote } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { BsCaretRight } from "react-icons/bs";
import "./Navbar.css";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [animationClasses, setAnimationClasses] = useState("");
  const themeClasses = `absolute left-0 dark_theme ${animationClasses}`;
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState("");

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

  const navbarActiveHandler = () => {
    if (activeClass === "") {
      setActiveClass("active");
    } else {
      setActiveClass("");
    }
  };

  return (
    <>
      <div className={themeClasses}></div>
      <nav
        className={`w-full h-auto bg-white shadow-lg flex flex-row px-12 py-2 justify-between font-cairo z-[105] dark:bg-black max-lg:px-6 navbar ${activeClass}`}
      >
        <div className={`flex flex-row items-center brand ${activeClass}`}>
          <div className="w-12">
            <img src={logo} alt="CPC Logo" className="w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-3xl text-black dark:text-white max-sm:text-2xl">
              CPC
            </div>
            <div className="text-primary text-xs max-sm:text-[0.6rem]">{`Codechef <PCCOE> Chapter`}</div>
          </div>
        </div>
        <div className={`flex flex-1 items-center mobileNav ${activeClass}`}>
          <div
            className={`flex justify-center items-center dark:text-white parentNavigator ${activeClass}`}
          >
            <ul
              className={`flex flex-row gap-12 font-medium max-lg:gap-6 max-md:hidden navigator ${activeClass}`}
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary flex gap-2 items-center"
                      : "flex gap-2 items-center"
                  }
                >
                  <IoHome className="md:hidden" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary flex gap-2 items-center"
                      : "flex gap-2 items-center"
                  }
                >
                  <RiTeamFill className="md:hidden" />
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary flex gap-2 items-center"
                      : "flex gap-2 items-center"
                  }
                >
                  <MdEventNote className="md:hidden" />
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/map"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary flex gap-2 items-center"
                      : "flex gap-2 items-center"
                  }
                >
                  <FaSitemap className="md:hidden" />
                  Roadmap to CP
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-row justify-center items-center gap-10 font-normal dark:text-white max-lg:gap-5 max-md:gap-8 max-vs:gap-4 parentFormNavigator ${activeClass}`}
          >
            <div
              onClick={themeToggleHandler}
              className={`cursor-pointer themeToggler ${activeClass}`}
            >
              {!darkTheme && <MdDarkMode className="inline" />}
              {darkTheme && <FiSun className="inline" />}
            </div>
            <p className="max-md:hidden">|</p>
            <button
              onClick={signupHandler}
              className={`max-md:hidden formNavigator ${activeClass}`}
            >
              <BsCaretRight className="md:hidden" />
              Sign up
            </button>
            <button
              onClick={loginHandler}
              className={`max-md:hidden formNavigator ${activeClass}`}
            >
              <TbLogin className="md:hidden" />
              Login
            </button>
          </div>
        </div>
        <div
          className={`dark:text-white items-center justify-center hidden max-md:flex toggle ${activeClass}`}
          onClick={navbarActiveHandler}
        >
          {activeClass === "" && <RxHamburgerMenu />}
          {activeClass === "active" && <RxCross2 />}
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
          <div className="cursor-pointer" onClick={() =>  navigate("/user/" + userData.username)}>Hi {userData.name}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
