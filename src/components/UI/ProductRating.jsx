import React from "react";
import Star from './Star';
import classes from './ProductRating.module.css';

const ProductRating = () => {
  return (
    <div className={classes["product-popularity"]}>
      <div className="product-star">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className={classes["product-rating"]}>5 ratings</div>
    </div>
  );
};

export default ProductRating;
