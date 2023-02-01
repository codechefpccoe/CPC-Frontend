import React from "react";
import { useSelector } from "react-redux";
import classes from "./Wave.module.css";

const Wave = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
      !darkTheme && (
      <div className={classes.ocean}>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
      </div>
      )
  );
};

export default Wave;
