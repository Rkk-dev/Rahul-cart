import React from "react";

import { Link } from "react-router-dom";

import classes from "../../style/LinkComponent.module.css";

const LinkComponent = (props) => {
  return (
    <div className={classes.linkContainer}>
      <Link to={props.url} state={props.state}> {props.children} </Link>
    </div>
  );
};

export default LinkComponent;
