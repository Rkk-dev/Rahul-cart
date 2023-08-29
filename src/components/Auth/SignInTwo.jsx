import { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

import AuthCard from "./AuthCard";
import VerifyOTP from "./VerifyOTP";
import AuthTitle from "./AuthTitle";
import AuthIcon from "./AuthIcon";
import AuthButton from "./AuthButton";

import { useDispatch } from "react-redux";
import { userDetailActions } from "../../store/userDetails";
import { loginAction } from "../../store/login";
import { API_URL } from "../../config";
import { setData } from "../../util/local";
import { UserAuthCard } from "../Styled/UserAuthUI";
import { BasicButton } from "../Styled/ButtonStyle";

const SignInTwo = ({ loginDetails, loadingHandler, success }) => {
  const [otpError, setOTPError] = useState(null);
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enteredMobileNumber = loginDetails.data.mobile;
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
    loadingHandler(true);
    const verifyOTP = async () => {
      
      const response = await fetch(
        API_URL + "Api/verifyRegisterOtp/",
        {
          method: "POST",
          body: otpData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
            console.log(data);
            setData('userInfo',data.data);
            dispatch(userDetailActions.updateUserDetails(data.data));
            dispatch(loginAction.logIn());
            success();
        } else {
          setOTPError(data.message);
        }
      }
      
    };
    verifyOTP().catch(err => console.log(err)).finally(() => {
      loadingHandler(false);
    })
  };

  return (
    <UserAuthCard>
      <AuthTitle title="Signup" />
      <AuthIcon />
      <VerifyOTP enteredMobileNumber={enteredMobileNumber} />
      <form onSubmit={otpSubmitHandler}>
        <OtpInput
          shouldAutoFocus={true}
          value={otp}
          onChange={setOTP}
          numInputs={6}
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
        <div>{otpError && <div className="customError">{otpError}</div>}</div>
        <BasicButton fullWidth={true} padded={true} >
          Verify OTP
        </BasicButton>
      </form>
    </UserAuthCard>
  );
};

export default SignInTwo;
