import Star from "./Star";
import Price from "./Price";
import LoveYou from "./LoveYou";
import { Link } from "react-router-dom";
import ProductTitle from "./ProductTitle";
import { styled } from "styled-components";
import BuyingOptions from "./BuyingOptions";

import { IMG_BASE_URL } from "../../config";
import classes from "../../style/Card.module.css";
import ProductImage from "../../assets/UI/Dummy-product.png";


const CardWrapper = styled.section`
  border-radius: 10.668px;
  border: 0.711px solid #f0f0f0d3;
  background: #f6f6f6;
  margin: 0 0.4rem;
  display: flex;
  flex-direction: column;
  transition: all 200ms;
  &.gridCard {
    width: auto;
    height: 100%;
  }
  &.flexCard {
    width: 15rem;
    flex-shrink: 0;
  }
  &:hover,
  &:active {
    box-shadow: 2px 2px 6px 0px #acacac;
    & img.productImage {
      transform: scale(1.2);
    }
  }
`;

const CardTop = styled.div`
  text-align: center;
  position: relative;
  height: 200px;
  overflow: hidden;
  & img.productImage {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 200ms;
  }
`;

const CardTopHeader = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  padding: 0.2rem 0.5rem 0 0;
`;

const CardTopHeaderBadge = styled.div`
  background: #222;
  display: inline-flex;
  padding: 7.112px 11.379px;
  align-items: flex-start;
  gap: 7.112px;
  color: #fff;
  font-size: 9.245px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Card = ({ title, mainImg, priceInfo, gridCard, link, id }) => {
  const imgPath = mainImg ? `${IMG_BASE_URL}${mainImg}` : ProductImage;
  const cardClass = gridCard ? "gridCard" : "flexCard";
  const wishlistData = {
    id,
    title,
    priceInfo,
    imgPath,
  };

  return (
    <CardWrapper className={cardClass}>
      <CardTop>
        <img className="productImage" src={imgPath} alt={title} title={title} />
        <CardTopHeader>
          <CardTopHeaderBadge>Most sold</CardTopHeaderBadge>
          <LoveYou value={wishlistData} />
        </CardTopHeader>
      </CardTop>

      <div className={classes.cardBottom}>
        <Link to={link}>
          <div>
            <ProductTitle>
              {title
                ? title
                : "CELLBELL Desire C104 Mid Back Comfortable Fabric Office Executive Chair..... "}
            </ProductTitle>
            <div className={classes.productPopularity}>
              <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className={classes.productRating}>5 ratings</div>
            </div>
            <Price {...priceInfo} />
            <BuyingOptions />
          </div>
        </Link>
      </div>
    </CardWrapper>
  );
};

export default Card;
