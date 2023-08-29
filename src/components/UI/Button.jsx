import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const red = props.red ? classes.btnWarning : "";
  const white = props.isWhite ? classes.btnWhite : "";
  
  return (
    <button
      onClick={props?.onClick}
      style={props.customStyle}
      className={`${classes.btn} ${white} ${red}`}
      type="submit"
      disabled={props.hide ? props.hide : false}
    >
      {props.children}
    </button>
  );
};

export default Button;
