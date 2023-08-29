import  { useState } from "react";
import { API_URL } from "../../config";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

import AuthCard from "./AuthCard";
import AuthTitle from "./AuthTitle";
import AuthIcon from "./AuthIcon";
import VerifyOTP from "./VerifyOTP";
import AuthButton from "./AuthButton";

import { Howl} from "howler";
import Sound from '../../assets/sound/cart.wav';

import { useDispatch } from "react-redux";
import {userDetailActions} from '../../store/userDetails';
import { loginAction} from '../../store/login';
import { setData } from "../../util/local";
import { UserAuthCard, UserAuthError } from "../Styled/UserAuthUI";
import { BasicButton } from "../Styled/ButtonStyle";

const LoginTwo = ({ data, updateLoadingState , loginSuccess }) => {

  const [otp, setOTP] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const audioEffect = new Howl({
    src:[Sound],
    volume: 1,
  })

  const enteredMobileNumber = data.mobile;
  const verifyOTPDetails = {
    mobile_number: enteredMobileNumber,
    entered_otp: otp,
  };

  const otpData = new URLSearchParams();
  for (const key in verifyOTPDetails) {
    otpData.append(key, verifyOTPDetails[key]);
  }

  const otpSubmitHandler = (e) => {
    e.preventDefault();
    updateLoadingState(true);
    const verifyOTP = async () => {
      const response = await fetch(API_URL + "Api/verifyLoginOtp/", {
        method: "POST",
        body: otpData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          console.log(data);
          setData('userInfo', data.data);
          dispatch(userDetailActions.updateUserDetails(data.data));
          dispatch(loginAction.logIn());
          audioEffect.play();
          loginSuccess();
        }
      } else {
        setError("Wrong OTP!");
        console.log("Erro hai : ", response);
      }
    };
    verifyOTP().catch((err) => {
      console.log(err);
    }).finally(() => {
      updateLoadingState(false);
    })
  };

  return (
    <UserAuthCard>
      <AuthTitle title="Verify OTP" />
      <AuthIcon />
      <VerifyOTP enteredMobileNumber={enteredMobileNumber} />
      <form onSubmit={otpSubmitHandler}>
        <OtpInput
          shouldAutoFocus={true}  
          value={otp}
          onChange={setOTP}
          numInputs={6}
          inputType="tel"
          containerStyle={{ gap: "0.2rem" }}
          inputStyle={{
            flex: "1",
            padding: "0.5rem 0.5rem",
            border: "1px solid #ccc",
            borderRadius: "0.2rem",
          }}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
        />
        <UserAuthError>{error && <span> {error} </span>}</UserAuthError>
        <BasicButton type="submit" fullWidth={true} padded={true}>
          Verify OTP
        </BasicButton>
      </form>
    </UserAuthCard>
  );
};

export default LoginTwo;
