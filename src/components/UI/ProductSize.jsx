import { Fragment } from "react";
import classes from "../../style/ProductSize.module.css";

const ProductSize = ({ size }) => {
  return (
    <section className={classes.productSize}>
      <span>Size</span>
      <div className="sizeInfo">
        {size.map((productSize, index, arr) => {
          let sizeUI;
          let space;
          if (index !== 0 && productSize.trim().length !== 0) {
            space = <span>x</span>;
          }
          if (productSize.trim().length !== 0) {
            sizeUI = <span> {productSize} </span>;
          }

          return (
            <Fragment key={index}>
              {space}
              {sizeUI}
            </Fragment>
          );
        })} Centimeters
      </div>
    </section>
  );
};

export default ProductSize;
