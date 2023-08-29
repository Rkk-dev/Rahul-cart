import { useState } from "react";
import { styled } from "styled-components";

import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcLike , FcCancel } from "react-icons/fc";
import { wishActions } from "../../store/wishlist";

import RedHeart from "../../assets/UI/redWish.svg";
import WhiteHeart from "../../assets/UI/whiteWish.svg";

const HeartWrapper = styled.div`
  border: 4px solid var(--white-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #2727279c;
  transition: transform 200ms;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

const LoveYou = ({ value }) => {
  const [isTouched, setIsTouched] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HeartIcon = isTouched ? RedHeart : WhiteHeart;
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);

  let heartClickHandler;

  const addToWishlistHandler = () => {
    if (loginStatus) {
      toast('Added To Wishlist',{
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        theme:'dark',
        type:'error',
        icon: <FcLike size={25}/>
      })
      dispatch(wishActions.addToWishlist(value));
      setIsTouched(true);
    } else {
      navigate("/login");
    }
  };
  const removeFromWishlistHandler = () => {
    if (loginStatus) {
      toast('Removed From Wishlist',{
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        theme:'dark',
        type:'error',
        icon: <FcCancel size={25} />
      })
      dispatch(wishActions.removeFromWishlist(value.id));
      setIsTouched(false);
    } else {
      navigate("/login");
    }
  };

  heartClickHandler = isTouched
    ? removeFromWishlistHandler
    : addToWishlistHandler;

  return (
    <HeartWrapper onClick={heartClickHandler}>
      <img src={HeartIcon} alt="" />
    </HeartWrapper>
  );
};

export default LoveYou;
