import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import classes from "../../style/Category.module.css";
import { FETCH_PRODUCT_BY_CATEGORY } from "../../config";

import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";
import BrandContainer from "../UI/BrandContainer";
import CategoryShimmer from "../Shimmer/CategoryShimmer";
import ThinLineWrapper from "../UI/ThinLineWrapper";
import DesktopContainer from "../UI/DesktopContainer";

const Category = (props) => {
  const [productList, setProductList] = useState(null);

  const linkState = useLocation();
  const { mcat_uid, scat_uid, name, info } = linkState?.state ? linkState?.state : props ;

  let url =
    FETCH_PRODUCT_BY_CATEGORY + `mcat_uid=${mcat_uid}&scat_uid=${scat_uid}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          setProductList(result);
        } else {
          setProductList({ status: false });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [mcat_uid, scat_uid]);

  let content;
  if (!productList) {
    content = <CategoryShimmer />;
  }
  if (productList?.status === false) {
    content = (
      <ThinLineWrapper>
        <h2>Empty Category</h2>
        <p>There is no product available for this category </p>
      </ThinLineWrapper>
    );
  }
  if (productList?.status) {
    content = (
      <>
        <div>
          <h4 className={classes.productInfoNumber}>
            {" "}
            {productList.data.length}{" "}
            {productList.data.length > 1 ? "Products" : "Product"} Available
          </h4>
        </div>
        <div className={classes.productContainer}>
          {productList.data.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.product_uid}
                gridCard={true}
                title={product.product_name}
                mainImg={product.product_image[0]}
                priceInfo={{
                  base_price: product.base_price,
                  final_price: product.final_price,
                  discount_percent: product.discount_percent,
                }}
                link={`/product/${product.product_uid}`}
              />
            );
          })}
        </div>
      </>
    );
  }

  return (
    <section className={classes.productCategory}>
      <DesktopContainer>
        <Wrapper>
          <BrandContainer>{name}</BrandContainer>
          <ThinLineWrapper>
            <div className={classes.categoryInfo}>{info}</div>
          </ThinLineWrapper>
          {content}
        </Wrapper>
      </DesktopContainer>
    </section>
  );
};

export default Category;
