import Lottie from "react-lottie";
import EmptyCartAnimation from "../../assets/Lottie/emptyCart.json";
import EmptyWishlistAnimation from "../../assets/Lottie/emptyWishlist.json";
import { styled } from "styled-components";

const LottieWrapper = styled.div`
  width:50vw;
  max-width:400px;
  margin:2rem auto;
  text-align:center;
  & h2 {
    margin:0.5rem 0;
    color: #6b6b6b;
  }
`;

const EmptyCart = ({ type, text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyCartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: EmptyWishlistAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let EmptyCart = <Lottie options={defaultOptions} />;

  let EmptyWish = <Lottie options={defaultOptions2} />;

  const content = type === "wish" ? EmptyWish : EmptyCart;
  const contentText = text ? text : 'Empty Cart';

  return <LottieWrapper>{content} <h2>{contentText}</h2></LottieWrapper>;
};

export default EmptyCart;
