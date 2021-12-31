import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ className, children }) => {
  return (
    <button className={`${className} ${classes.button}`}>{children}</button>
  );
};

export default Button;
