import { FETCH_CATEGORY } from "../../config";
import { loginAction } from "../../store/login";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CloseIcon from "../../assets/UI/closeMobileMenu.svg";
import classes from "../../style/MobileMenuFixed.module.css";
import { LogoutButton, BasicButton } from "../Styled/ButtonStyle";

import Button from "./Button";
import Divider from "./Divider";
import Nav from "../Shimmer/Nav";
import DetailBox from "./DetailBox";
import MenuUI from "../ConfigUI/MenuUI";
import SubMenu from "../ConfigUI/SubMenu";
import LinkComponent from "./LinkComponent";
import { useNavigate } from "react-router-dom";

const MobileMenuFixed = ({ onClick }) => {
  const [categoryData, setCategoryData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);

  const logoutBtn = (
    <LogoutButton
      onClick={() => {
        dispatch(loginAction.logOut());
        onClick();
      }}
    >
      Logout
    </LogoutButton>
  );
  const loginBtn = (
    <BasicButton
      onClick={() => {
        navigate("/login");
        onClick();
      }}
    >
      {" "}
      Login{" "}
    </BasicButton>
  );
  let optionBtn = loginStatus ? logoutBtn : loginBtn;
  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const response = await fetch(FETCH_CATEGORY);
        const data = await response.json();
        setCategoryData(data.data);
      } catch (err) {
        console.log("Error in fetching Category Data", err);
      }
    };

    fetchAllCategory();
  }, []);

  return (
    <section className={classes.mobileMenuFixed}>
      <div>
        <header>
          <span> Categories</span>
          <div className={classes.imgBox}>
            <img onClick={onClick} src={CloseIcon} />
          </div>
        </header>

        <nav className={classes.nav}>
          {!categoryData.length && <Nav />}
          {categoryData.map((category) => {
            return (
              <React.Fragment key={category.id}>
                <DetailBox
                  isClosed={true}
                  title={category.mcat_name}
                  style={{ background: "none" }}
                >
                  <SubMenu onClick={onClick} categoryId={category.mcat_uid} />
                </DetailBox>
                <Divider />
              </React.Fragment>
            );
          })}
        </nav>

        <footer className={classes.footer}>
          <section>
            © 2023 Grandeur Living | Terms & Conditions | Privacy Policy Mahavir
            Group is an exclusive member of VYZ Company . Grandeur Living is a
            registered trademark used under license.
          </section>
          {optionBtn}
        </footer>
      </div>
    </section>
  );
};

export default MobileMenuFixed;
