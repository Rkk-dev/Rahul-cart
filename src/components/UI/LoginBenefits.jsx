import React from "react";

import BenefitOne from '../../assets/UI/loginBenefitsEasyDelivery.svg'
import BenefitTwo from '../../assets/UI/loginBenefitsDiscount.svg'
import BenefitThree from '../../assets/UI/loginBenefitsStar.svg'

import classes from '../../style/LoginBenefits.module.css';

const LoginBenefits = () => {

    return <section>
        <div className={classes.loginBenefitsSectionContainer}>
            <span>
            Advatnages of secure login
            </span>
            <section className={classes.loginBenefitsSection}>
                <figure>
                    <img src={BenefitOne} alt="" />
                    <figcaption> Easily track order, hassle free returns </figcaption>
                </figure>
                <figure>
                    <img src={BenefitTwo} alt="" />
                    <figcaption>Get relevant alerts and offers details  </figcaption>
                </figure>
                <figure>
                    <img src={BenefitThree} alt="" />
                    <figcaption> Wishlist, rating, ofeers </figcaption>
                </figure>
            </section>
        </div>
    </section>

}

export default LoginBenefits;