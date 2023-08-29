import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import Logo from "../Header/Logo";
import CallIcon from "../../assets/UI/call.svg";
import WIcon from "../../assets/UI/whatsapp.svg";

import SocialOne from "../../assets/UI/linkedin.svg";
import SocialTwo from "../../assets/UI/facebook.svg";
import SocialThree from "../../assets/UI/instagram.svg";
import SocialFour from "../../assets/UI/youtube.svg";

import Divider from "../UI/Divider";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="footer-container">
        <section className={styles["footer-title"]}>
          <h4>
            Your ultimate destination for
            <span className={styles["footer-brand-text"]}>
              all solution for Fabric Needs
            </span>
          </h4>
        </section>

        <Divider color="#BBBBBB" />

        <section className={styles["footer-form"]}>
          <div className={styles["footer-form-section-container"]}>
            <div className={styles["footer-form-title"]}>
              Join our
              <br />
              Private client Register
            </div>
            <div className="footer-form-content">
              <div className={styles["footer-form-container"]}>
                <form>
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="First Name* "
                  />
                  <Input name="lastname" type="text" placeholder="Last Name " />
                  <div className={styles["form-group"]}>
                    <Input name="email" type="email" placeholder="Email " />
                    <Button>Register</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Divider />

        <section className={styles["footer-contact"]}>
          <div className="footer-contact-top">
            <Logo />
          </div>
          <div className={styles["footer-contact-bottom"]}>
            <div className={styles["footer-contact-left"]}>
              <div className={styles["footer-left-box"]}>
                <img src={CallIcon} alt="" />
                <span>+91-9009566516 | 9009566516</span>
              </div>
              <div className={styles["footer-left-box"]}>
                <img src={WIcon} alt="" />
                <a href="https://wa.me/+919009566516">+91-9009566516</a>
              </div>
            </div>
            <div className={styles["footer-contact-right"]}>
              <div className="right-text">Follow Us on:</div>
              <div className="right-icons">
                <a href="#">
                  <img src={SocialOne} alt="" />
                </a>
                <a href="#">
                  <img src={SocialTwo} alt="" />
                </a>
                <a href="#">
                  <img src={SocialThree} alt="" />
                </a>
                <a href="#">
                  <img src={SocialFour} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className={styles["footer-terms-text"]}>
          <span>
            © 2023 Grandeur Living | <Link to="#">Terms & Conditions</Link> |
            <Link to="#">Privacy Policy</Link>
          </span>
          <br />
          {/* <span>
            Mahavir Group is an exclusive member of VYZ Company . Grandeur
            Living is a registered trademark used under license.
          </span> */}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
