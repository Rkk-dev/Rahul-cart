import React from "react";

import Button from '../UI/Button';


const AuthButton = (props) => {
  return (
    <div className="topGap" onClick={props.onClick}>
      <Button hide={props.hide} customStyle={{ width: "100%" }}> {props.caption} </Button>
    </div>
  );
};

export default AuthButton;
