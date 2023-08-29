import React from "react";

import classes from "../../style/DesktopContainer.module.css";

const DesktopContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default DesktopContainer;
