import { useSelector } from "react-redux";

import classes from "../../style/Cart.module.css";

import Space from "../UI/Space";
import MobileGap from "../UI/MobileGap";
import Container from "../UI/Container";
import EmptyCart from "../Lottie/EmptyCart";
import LoginPlease from "../UI/LoginPlease";
import BrandContainer from "../UI/BrandContainer";
import { getData } from "../../util/local";
import CartItem from "../UI/CartItem";
import Total from "../UI/Total";

const Cart = () => {
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  // const cartItems = cartDetails.itemsInCart;
  console.log(cartItems)
  let content;
  if (cartItems?.length === 0) {
    content = (
      <>
        <div className={classes.emptyCartStyles}>
          <EmptyCart />
        </div>
        {/* <div className={classes.emptyCartText}>
          <h2>Your Cart is Empty!</h2>
        </div> */}
      </>
    );
  }else {
    const items = cartItems.map(cart => {
      return <CartItem key={cart.id} {...cart} />
    })
    content = <div>
      <Total shoppingInfo={cartItems} />
      <h2> Cart Items</h2>
      {items}
    </div>
  }
  return (
    <>
      <Container>
        <MobileGap>
          <BrandContainer>My Cart</BrandContainer>
          {!loginStatus && (
            <Space>
              <LoginPlease />
            </Space>
          )}
          {loginStatus && content}
        </MobileGap>
      </Container>
    </>
  );
};

export default Cart;
