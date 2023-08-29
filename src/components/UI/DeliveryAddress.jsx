import React, { useState } from "react";
import classes from "../../style/DeliveryAddress.module.css";
import CheckoutInput from "./CheckoutInput";
import Button from "./Button";
const DeliveryAddress = () => {
  const [showAlternative, setShowAlternative] = useState(false);
  return (
    <section className={classes.addressContainer}>
      <div className={classes.fullRow}>
        <CheckoutInput type="text" placeholder="full name (Required) " />
      </div>
      <div className={classes.fullRow}>
        <CheckoutInput type="phone" placeholder="phone number (Required) " />
      </div>
      <div className={classes.fullRow}>
        {showAlternative ? (
          <CheckoutInput
            type="text"
            placeholder="Alternate phone number (Required) "
          />
        ) : (
          <span
            onClick={() => {
              setShowAlternative(true);
            }}
          >
            Add alternate Phone number +
          </span>
        )}
      </div>
      <CheckoutInput type="text" placeholder="PinCode (Required) " />
      <CheckoutInput type="text" placeholder="State (Required) " />
      <CheckoutInput type="text" placeholder="City (Required) " />
      <CheckoutInput
        type="text"
        placeholder="house no. Building name (Required) "
      />
      <div className={classes.fullRow}>
        <CheckoutInput
          type="text"
          placeholder="road name, area, Colony (Required) "
        />
      </div>
      <Button>Save Address</Button>
    </section>
  );
};

export default DeliveryAddress;
