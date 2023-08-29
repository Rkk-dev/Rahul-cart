import { Link } from "react-router-dom";
import { useState, Fragment } from "react";
import { modalActions } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";

import Logo from "./Logo";
import CustomAvatar from "../../assets/UI/user.png";
import MenuIcon from "../../assets/Header/menu.svg";
import ArrowIcon from "../../assets/Header/arrow.svg";
import SearchIcon from "../../assets/Header/search.svg";
import VerifiedAvatar from "../../assets/UI/userVarified.png";

import ThinLine from "../UI/ThinLine";
import MobileMenuFixed from "../UI/MobileMenuFixed";

import classes from "../../style/Mobile.module.css";

const Mobile = () => {
  const [hiddenMobileMenu, setHiddenMobileMenu] = useState(true);

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);

  const modalOpener = () => {
    dispatch(modalActions.showModal());
  };
  const mobileMenuOpenerHandler = () => {
    setHiddenMobileMenu(false);
  };
  const mobileMenuCloserHandler = () => {
    setHiddenMobileMenu(true);
  };

  return (
    <Fragment>
      <header className={classes.globalHeader}>
        <div>
          <Link to="">
            <Logo />
          </Link>
        </div>
        <div className={classes.globalHeaderRight}>
          <div>
            <img src={SearchIcon} alt="" />
          </div>
          <ThinLine />
          <div>
            <img
              src={loginStatus ? VerifiedAvatar : CustomAvatar}
              alt=""
              width={35}
            />
          </div>
          <div onClick={modalOpener}>
            <img src={ArrowIcon} alt="" />
          </div>
          <ThinLine />
          <div onClick={mobileMenuOpenerHandler}>
            <img src={MenuIcon} alt="" />
          </div>
        </div>
      </header>
      {!hiddenMobileMenu && (
        <MobileMenuFixed onClick={mobileMenuCloserHandler} />
      )}
    </Fragment>
  );
};

export default Mobile;
