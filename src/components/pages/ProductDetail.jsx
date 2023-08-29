import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { FETCH_PRODUCT_BY_ID, IMG_BASE_URL } from "../../config";

import { useDispatch, useSelector } from "react-redux";
import { addToCartActions } from "../../store/addToCartSlice";

import { Howl, Howler } from "howler";
import Sound from '../../assets/sound/cart.wav';

import AddedToCart from "../Lottie/AddedToCart";

import Card from "../UI/Card";
import Price from "../UI/Price";
import Space from "../UI/Space";
import Button from "../UI/Button";
import Colors from "../UI/Colors";
import LoveYou from "../UI/LoveYou";
import Wrapper from "../UI/Wrapper";
import Container from "../UI/Container";
import DetailBox from "../UI/DetailBox";
import ScrollView from "../UI/ScrollView";
import ProductTitle from "../UI/ProductTitle";
import BuyingOptions from "../UI/BuyingOptions";
import ProductRating from "../UI/ProductRating";
import ThinLineWrapper from "../UI/ThinLineWrapper";
import DesktopContainer from "../UI/DesktopContainer";
import MoreComponent from "../Universal/MoreComponent";

import UserContact from "../Universal/UserContact";
import classes from "../../style/ProductDetail.module.css";

import Doubt from "../Custom/Doubt";
import ProductSize from "../UI/ProductSize";
import ProductShimmer from "../Shimmer/ProductShimmer";
import ProductQuantity from "../UI/ProductQuantity";
import DiscountDummyOne from "../../assets/customize/dummydiscount.png";
import Divider from "../UI/Divider";
import ThinLine from "../UI/ThinLine";
import { toast } from "react-toastify";
import { setData } from "../../util/local";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector(state => state.loginSystem.isUserLogin);
  const cartDetials = useSelector(state => state.cart);



  const audioEffect = new Howl({
    src:[Sound],
    volume: 0.8,
  })

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const imgChangeHandler = (index) => {
    setImgIndex(index);
  };

  const addToCartHandler = () => {
   
    if(!loginStatus) {
      navigate('/login');
    } else {
      const cartItem = {
        id: product.product_uid,
        image: product.product_image[0],
        name: product.product_name,
        price: {
          rate: product.base_price,
          discountRate: product.final_price,
          discountPercent: product.discount_percent,
        },
        quantity,
      };
      toast.success("Added to cart",{
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        theme:'dark'
      });
      audioEffect.play();
      setData('myCart',cartDetials);
      dispatch(addToCartActions.addItem(cartItem));
      setData('myCart',cartDetials);

    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${FETCH_PRODUCT_BY_ID}${productId}`);
        if (response.ok) {
          const result = await response.json();
          setProduct(result.data);
        } else {
          setProduct({ status: false, message: "No Product Found!" });
        }
      } catch (err) {
        console.log("Error in product details fetch method", err);
      }
    };

    fetchProductDetails();
  }, []);

  if (!product) {
    return <ProductShimmer />;
  }
  if (product.status === false) {
    return (
      <DesktopContainer>
        <ThinLineWrapper>
          <h2>{product.message}</h2>
        </ThinLineWrapper>
      </DesktopContainer>
    );
  }

  return (
    <div>
      <div>
        <Container>
          <Space>
            <div className={classes.productInfo}>
              <div className={classes.productInfoContainer}>
                <div className="productInfoLeft">
                  <div className={classes.productInfoLeftContainer}>
                    <div className={classes.productMainImage}>
                      <img
                        src={`${IMG_BASE_URL}${product.product_image[imgIndex]}`}
                        alt={product.product_name}
                        className={classes.mainProductImage}
                      />
                      <div className={classes.productLove}>
                        <LoveYou />
                      </div>
                    </div>
                    <div>
                      <div className={classes.productMoreImages}>
                        {product.product_image?.map((image, index) => {
                          return (
                            <img
                              key={index}
                              src={`${IMG_BASE_URL}${image}`}
                              alt=""
                              onClick={() => imgChangeHandler(index)}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className={classes.productActions}>
                      <Button customStyle={{ borderRadius: "0px", flex: 1 }} onClick={() => {navigate('/checkout')}}>
                        {" "}
                        Buy Now🔥{" "}
                      </Button>
                      <Button
                        customStyle={{ borderRadius: "0px", flex: 1 }}
                        isWhite={true}
                        onClick={addToCartHandler}
                      >
                        {" "}
                        Add to cart🤩{" "}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="productInfoRight">
                  <div className="productInfoRightContainer">
                    <div className="productInfoData">
                      <div className="productDataContainer">
                        <div className={classes.productDataOne}>
                          <ProductTitle>
                            {product.product_name
                              ? product.product_name
                              : "CELLBELL Desire C104 Mid Back Comfortable Fabric Office Executive Chair"}
                          </ProductTitle>
                          <ProductRating />
                        </div>
                        <div className="productDataTwo">
                          <span className="specialText">Special Price</span>
                          <Price
                            {...{
                              base_price: product.base_price,
                              final_price: product.final_price,
                              discount_percent: product.discount_percent,
                            }}
                          />
                          <BuyingOptions />
                          <ThinLineWrapper>
                            <ProductSize size={product.product_size} />
                            <ProductQuantity
                              currentQuantity={quantity}
                              addOne={increaseQuantityHandler}
                              removeOne={decreaseQuantityHandler}
                            />
                          </ThinLineWrapper>

                          <Colors colorObject={product.color} />
                        </div>
                      </div>
                    </div>
                    <div className="productDescription">
                      <ThinLineWrapper>
                        <DetailBox
                          isClosed={true}
                          title={"Product Description"}
                        >
                          {product.product_desc.trim().length === 0 ? (
                            <div> There is no description!</div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.product_desc,
                              }}
                            />
                          )}
                        </DetailBox>
                        <DetailBox isClosed={true} title={"Product Details"}>
                          {product.product_details.trim().length === 0 ? (
                            <div> There is no Product Details </div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.product_details,
                              }}
                            />
                          )}
                        </DetailBox>
                        <DetailBox isClosed={true} title={"Instructions"}>
                          {product.instructions.trim().length === 0 ? (
                            <div> There is no product instruction </div>
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.instructions,
                              }}
                            />
                          )}
                        </DetailBox>
                      </ThinLineWrapper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Space>
        </Container>

        <Container>
          <Space>
            <Wrapper>
              <MoreComponent title="😲You might be interested in" link="#" />
            </Wrapper>
            <ScrollView>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
              <div
                className="imgHolder"
                style={{ height: "200px", width: "400px", flexShrink: "0" }}
              >
                <img src={DiscountDummyOne} alt="" />
              </div>
            </ScrollView>
          </Space>
        </Container>

        <Space>
          <Doubt />
        </Space>

        <Container>
          <Space>
            <Wrapper>
              <MoreComponent title="💎 Deal of the Day" link="#" />
            </Wrapper>
            <ScrollView>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </Space>
        </Container>

        <Space>
          <UserContact />
        </Space>

        <Container>
          <Space>
            <Wrapper>
              <MoreComponent title="💎 Deal of the Day" link="#" />
            </Wrapper>
            <ScrollView>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </Space>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
