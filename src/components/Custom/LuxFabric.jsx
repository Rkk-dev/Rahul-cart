import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Button from "../UI/Button";
import Container from "../UI/Container";
import FabricBox from "../UI/FabricBox";
import classes from "./LuxFabric.module.css";

import MobileBanner from '../../assets/customize/LuxFabricMobile.webp';
import DesktopBanner from '../../assets/customize/LuxFabric.webp';
import FabricOne from "../../assets/customize/fabric-one.png";
import FabricTwo from "../../assets/customize/fabric-two.png";
import FabricThree from "../../assets/customize/fabric-three.png";

const FabricWrapper = styled.section`
  background-color: #000;
  background-image: url(${MobileBanner});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  color: var(--white-color);
  text-align: center;
  font-style: normal;
  line-height: normal;
  @media (min-width:800px) {
    background-color: #000;
    background-image: url(${DesktopBanner});
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    padding: 1px 0 6rem 4rem;
    gap: 1rem;
  }
`;

const LuxFabric = () => {
  return (
    <FabricWrapper>
      <div className={classes.luxDesktop}>
        <div className="luxDesktopContainer">
          <FabricBox>
            <span>Fabric Used :</span>
            <div className={classes["fabrics-container"]}>
              <img src={FabricOne} alt="" />
              <img src={FabricTwo} alt="" />
              <img src={FabricThree} alt="" />
            </div>
          </FabricBox>
        </div>
      </div>
      <div className={classes.luxMobile}>
        <div className="luxMobile-text">
          <h3>Luxurious Fabric💛</h3>
          <p>Your Desired Categories of sofa set for you prerfect home</p>
        </div>
        <div className="luxMobile-button">
          <Link to="fabric">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </FabricWrapper>
  );
};

export default LuxFabric;
