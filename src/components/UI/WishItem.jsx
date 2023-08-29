import React from "react";

import ProductTitle from "./ProductTitle";

import ProductRating from "./ProductRating";

import BuyingOptions from "./BuyingOptions";

import Button from "./Button";

import Price from "./Price";


import classes from "../../style/WishItem.module.css";

import { IMG_BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { addToCartActions } from "../../store/addToCartSlice";
import { toast } from "react-toastify";

const WishItem = ({ id, image, name, price }) => {

  const dispatch = useDispatch();
  const priceObject = {
    final_price: price.final_price,
    base_prce: price.base_prce,
    discount_percent: price.discount_percent
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
          <img src={`${image}`} alt="" />
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
          {/* <div style={{ color: '#bbb', fontSize: '14px', margin: '0.5rem 0' }}>
            <span> Quantity : </span>
            <span> {quantity} </span>
          </div> */}
        </section>
        <section className={classes.wishItemActions}>
          <Button> Buy Now </Button>
          <Button onClick={removeFromCart} isWhite="true"> Remove from Wishlist </Button>
        </section>
      </div>
    </section>
  );
};

export default WishItem;
