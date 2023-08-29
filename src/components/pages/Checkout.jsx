import React from "react";
import Ad from "../../assets/UI/ad.png";

import classes from "../../style/Checkout.module.css";

import ThinLineWrapper from "../UI/ThinLineWrapper";
import Divider from "../UI/Divider";

import DetailBox from "../UI/DetailBox";
import CheckoutLoginComponent from "../UI/CheckoutLoginComponent";
import DeliveryAddress from "../UI/DeliveryAddress";
import OrderSummery from "../UI/OrderSummery";
import { PaddingWrapper } from "../Styled/UIStyle";

const Checkout = () => {
  return (
    <PaddingWrapper>
      <div className={classes.checkoutContainer}>
        <section>
          <ThinLineWrapper>
            <DetailBox title="Login / Signup ">
              <CheckoutLoginComponent />
            </DetailBox>
            <Divider color="#F6F6F6" />

            <DetailBox title="Delivery Address">
              <DeliveryAddress />
            </DetailBox>

            <DetailBox title="Order Summery">
                <OrderSummery />
            </DetailBox>
            <DetailBox title="Payment Options">

            </DetailBox>
          </ThinLineWrapper>

          
        </section>
        <section>
          <div>
            <img src={Ad} alt="future ad" />
          </div>
          <div>
            <img src={Ad} alt="future ad" />
          </div>
        </section>
      </div>
    </PaddingWrapper>
  );
};

export default Checkout;
