import { useRef } from "react";
import { API_URL } from "../../config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import AuthCard from "./AuthCard";
import AuthTitle from "./AuthTitle";
import CheckoutInput from "../UI/CheckoutInput";
import AuthButton from "./AuthButton";
import AuthIcon from "./AuthIcon";

import AlreadyRegister from "./AlreadyRegister";
import { useFormik } from "formik";

import { UserAuthCard, UserAuthError } from "../Styled/UserAuthUI";
import { BasicButton } from "../Styled/ButtonStyle";

const Login = ({ updateLoadingState, moveToNextStep }) => {


  console.log('Login component runs');
  const number = useRef(null);
  const [error, setError] = useState("");

  const mobileNumberValidate = (values) => {
    const errors = {};
    if (!values.mobile) {
      errors.mobile = 'Required';
    } else if (!/^[0-9]{10}$/.test(values.mobile)) {
      errors.mobile = 'Mobile number must have 10 digits';
    }
    return errors;
  }

  const loginDetails = useFormik({
    initialValues: {
      mobile: "",
    },
    validate: mobileNumberValidate, 
    onSubmit: (values) => {
      console.log(values);
      updateLoadingState(true);
      const fetchOTP = async () => {
        const response = await fetch(`${API_URL}/Api/customerLogin/?mobile=${values.mobile}`);
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.status) {
            console.log(data);
            moveToNextStep(data.data);
          } else {
            console.log(data);
            setError(data.message);
          }
        }  
      };

      fetchOTP().catch(err => {
        console.log(err);
      }).finally(() => {
        console.log('final coded')
        updateLoadingState(false);
      })
    },
  });


  return (
    <UserAuthCard>
      <AuthTitle title="Login" />
      <AuthIcon />
      <form onSubmit={loginDetails.handleSubmit}>
        <UserAuthError>
            {error && error}
        </UserAuthError>
        <div className="customInput">
          <input
            name="mobile"
            id="mobile"
            value={loginDetails.values.mobile}
            onChange={loginDetails.handleChange}
            onBlur={loginDetails.handleBlur}
            placeholder="Enter Your Mobile Number *"
          />
        </div>
        <UserAuthError>
          {loginDetails.touched.mobile && loginDetails.errors.mobile && loginDetails.errors.mobile}
        </UserAuthError>
        <BasicButton type="submit" fullWidth={true} padded={true}>
          GET OTP
        </BasicButton>
      </form>
      <AlreadyRegister />
    </UserAuthCard>
  );
};

export default Login;
