import React from "react";
import classes from '../../style/BrandContainer.module.css';

const BrandContainer = ({ children }) => {
  return (
    <div className={classes.brandContainer}>
      <span>{children}</span>
    </div>
  );
};

export default BrandContainer;
