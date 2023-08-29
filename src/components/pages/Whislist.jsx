import {Fragment} from "react";
import Space from "../UI/Space";
import WishItem from "../UI/WishItem";
import Container from "../UI/Container";
import MobileGap from "../UI/MobileGap";
import { useSelector } from "react-redux";
import LoginPlease from "../UI/LoginPlease";
import BrandContainer from "../UI/BrandContainer";
import EmptyCart from "../Lottie/EmptyCart";


const Whislist = () => {
  const loginStatus = useSelector((state) => state.loginSystem.isUserLogin);
  const wishList  = useSelector(state => state.wish.items);

  let content;
  if(wishList?.length === 0) {
    content = <EmptyCart type="wish" text="Empty Wishlist" />
  }else if(wishList?.length) {
    content = wishList.map(wish => {
      return <WishItem key={wish.id} name={wish.title} image={wish.imgPath} id={wish.id} price={wish.priceInfo} />
    })
  }
  console.log(wishList);
  return (
    <Fragment>
      <Container>
        <MobileGap>
          <Space>
            <BrandContainer>Whislist</BrandContainer>
          </Space>
          {!loginStatus && <LoginPlease />}
          {loginStatus && (
            <Space>
              {content}
            </Space>
          )}
        </MobileGap>
      </Container>
    </Fragment>
  );
};

export default Whislist;
