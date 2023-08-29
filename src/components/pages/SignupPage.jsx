import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Spinner from "../UI/Spinner";
import Success from "../Lottie/Success";
import SignInOne from "../Auth/SignInOne";
import SignInTwo from "../Auth/SignInTwo";
import classes from "../../style/SignupPage.module.css";

const SignupPage = () => {
  
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (registrationStatus) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 3000);
    }
  }, [registrationStatus]);

  const loadingHandler = (state) => {
    setIsLoading(state);
  };

  const stepHandler = (data) => {
    setData(data);
    setStep(2);
  };

  const registerationHandler = () => {
    setRegistrationStatus(true);
  };

  const getDetails = (
    <SignInOne moveToNextStep={stepHandler} loadingHandler={loadingHandler} />
  );
  const verifyOTP = (
    <SignInTwo
      loginDetails={data}
      loadingHandler={loadingHandler}
      success={registerationHandler}
    />
  );

  let content;

  if (step === 1) {
    content = getDetails;
  }

  if (step === 2) {
    content = verifyOTP;
  }

  return ( 
    showSuccess ? (
      <div className={classes.successContainer}>
        <div>
        <Success />
        </div>
      </div>
    ) : 
    <section className={classes.signupContainer}>
      {isLoading && <Spinner />}
      {!isLoading && content}
    </section>
  );
};

export default SignupPage;
