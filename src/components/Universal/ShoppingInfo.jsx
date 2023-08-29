import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { modalActions } from "../../store/modal";

import MyCart from "../../assets/UI/cart.svg";
import Whislist from "../../assets/UI/whiteHeart.svg";

import ThinLine from "../UI/ThinLine";
import CustomBadge from "../UI/CustomBadge";

import Arrow from "../../assets/Header/arrow.svg";
import CustomUser from '../../assets/UI/user.png'
import Avatar from "../../assets/Header/avatar.png";
import VerifiedUser from '../../assets/UI/userVarified.png';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10px 1fr 10px 2fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  color: var(--white-color);
  justify-items: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;


const ShoppingInfo = () => {

  const dispatch = useDispatch();

  const userName = useSelector(state => state.userInfo.data.first_name);
  const cartItems = useSelector(state => state.cart.totalNumberOfItems);
  const wishItems = useSelector(state => state.wish.totalNumberOfItems);
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);

  const modalOpenHandler = () => {
    dispatch(modalActions.showModal());
  };

  let welcomeMessage = "Hi👋🏻 ";
  if (loginStatus) {
    welcomeMessage = welcomeMessage + userName;
  } else {
    welcomeMessage = welcomeMessage + " Guest";
  }

  return (
    <Wrapper>
      <div>
        <Link to="cart">
          <CustomBadge src={MyCart} value={cartItems ? cartItems : 0} title="My Cart" />
        </Link>
      </div>
      <ThinLine />
      <div>
        <Link to="wishlist">
          <CustomBadge src={Whislist} value={wishItems ? wishItems : 0} title="Whislist" />
        </Link>
      </div>
      <ThinLine />
      <div>
        <ProfileWrapper onClick={modalOpenHandler}>
          <div>
            <img src={loginStatus ? VerifiedUser : CustomUser} alt="" width="35" />
          </div>
          <div>
            <span>{welcomeMessage}</span>
          </div>
          <div>
            <img src={Arrow} alt="" />
          </div>
        </ProfileWrapper>
      </div>
    </Wrapper>
  );
};

export default ShoppingInfo;
