import React, { useState } from "react";

import CheckoutInput from "../UI/CheckoutInput";

const AuthOTP = (props) => {
  const [firstOTP, setFirstOTP] = useState(null);
  const [secondOTP, setSecondOTP] = useState(null);
  const [thirdOTP, setThirdOTP] = useState(null);
  const [fourthOTP, setFourthOTP] = useState(null);
  const [fifthOTP, setFifthOTP] = useState(null);
  const [sixthOTP, setSixthOTP] = useState(1);

  const styleObject = {
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
  };

  const inputStyle = {
    textAlign: "center",
  };

  return (
    <div className="otp">
      <div className="otpContainer" style={styleObject}>
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={firstOTP}
          onChange={(e) => setFirstOTP(e.target.value)}
          required={true}
        />
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={secondOTP}
          onChange={(e) => setSecondOTP(e.target.value)}
        />
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={thirdOTP}
          onChange={(e) => setThirdOTP(e.target.value)}
        />
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={fourthOTP}
          onChange={(e) => setFourthOTP(e.target.value)}
        />
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={fifthOTP}
          onChange={(e) => setFifthOTP(e.target.value)}
        />
        <CheckoutInput
          type="text"
          placeholder=""
          maxLength="1"
          autoComplete="off"
          style={inputStyle}
          value={sixthOTP}
          onChange={(e) => {
            setSixthOTP(e.target.value);
            props.otpHandler(`${firstOTP} ${secondOTP} ${thirdOTP} ${fourthOTP} ${fifthOTP} ${sixthOTP}`)
          }}
        />
      </div>
    </div>
  );
};

export default AuthOTP;
