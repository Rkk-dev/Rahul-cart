import Price from "./Price";
import Button from "./Button";
import ProductTitle from "./ProductTitle";
import ProductRating from "./ProductRating";
import BuyingOptions from "./BuyingOptions";

import classes from "../../style/WishItem.module.css";

import { IMG_BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addToCartActions } from "../../store/addToCartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItem = ({ id, image, name, price, quantity }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceObject = {
    final_price: price.discountRate,
    base_prce: price.rate,
    discount_percent: price.discountPercent
  }
  const removeFromCart = () => {
    toast.error('Item removed from cart!', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    })
    dispatch(addToCartActions.removeItem(id))
  }

  return (
    <section className={classes.container}>
      <div className={classes.wishItem}>
        <figure className={classes.wishItemImage}>
          <img src={`${IMG_BASE_URL}${image}`} alt="" />
        </figure>
        <section className={classes.itemInfo}>
          <ProductTitle>
            {name ? name :
              'CELLBELL Desire C104 Mid Back Comfortable Fabric Office ExecutiveChair.....'}
          </ProductTitle>
          <div>
            <ProductRating />
          </div>
          <Price {...priceObject} />
          <BuyingOptions />
          <div style={{ color: '#bbb', fontSize: '14px', margin: '0.5rem 0' }}>
            <span> Quantity : </span>
            <span> {quantity} </span>
          </div>
        </section>
        <section className={classes.wishItemActions}>
          <Button onClick={() => navigate('/checkout') }> Buy Now </Button>
          <Button onClick={removeFromCart} isWhite="true"> Remove from card </Button>
        </section>
      </div>
    </section>
  );
};

export default CartItem;
