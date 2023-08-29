import React from "react";
import classes from "./FabricBox.module.css";
const FabricBox = ({ children }) => {
  return <div className={classes.fabricBox}>{children}</div>;
};

export default FabricBox;
