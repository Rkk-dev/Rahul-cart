import React from "react";

import classes from "../../style/ThinLineWrapper.module.css";

const ThinLineWrapper = (props) => {
  return <div className={classes.thinWrapper}>{props.children}</div>;
};

export default ThinLineWrapper;
