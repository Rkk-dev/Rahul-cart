import React from "react";
import Button from "./Button";
import LoginPic from "../../assets/UI/loginPlease.png";

import classes from "../../style/LoginPlease.module.css";
import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";

const LoginPlease = () => {
  return (
    <section>
      <div className={classes.loginPleaseContainer}>
        <div className={classes.loginImage}>
          <img src={LoginPic} alt="" />
        </div>
        <div className={classes.loginText}>
          <h4>Missing Cart Items?</h4>
          <p> Login to see the items you added previously</p>
        </div>
        <LinkComponent url="/login">
          <Button customStyle={{ alignSelf: "stretch" }}>


            Login

          </Button>
        </LinkComponent>
      </div>
    </section>
  );
};

export default LoginPlease;
