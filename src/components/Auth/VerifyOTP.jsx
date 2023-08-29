const VerifyOTP = ({ enteredMobileNumber }) => {
  const styleObject = {
    color: "#adadad",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "16px",
    padding:'0.5rem 0 1rem'
  };
  return (
    <div style={styleObject}>
      <span>Enter OTP sent to your Mobile Number </span>
      <span style={{color:'black'}}> {enteredMobileNumber} </span>
    </div>
  );
};


export default VerifyOTP;