import React from "react";

import CheckoutInput from "./CheckoutInput";
import TermsCondition from "./TermsCondition";
import Button from "./Button";
import LoginBenefits from "./LoginBenefits";

import classes from '../../style/CheckoutLoginComponent.module.css';

const CheckoutLoginComponent = () => {
  return (
    <section className={classes.checkoutLoginComponentWrapper}>
      <div>
        <CheckoutInput
          type="text"
          placeholder="enter your mobile number or email"
        />
        <TermsCondition />
        <Button> Continue </Button>
      </div>
      <LoginBenefits />
    </section>
  );   
};


export default CheckoutLoginComponent;