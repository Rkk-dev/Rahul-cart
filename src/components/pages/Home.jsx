import { Link } from "react-router-dom";
import { PaddingWrapper } from "../Styled/UIStyle";
import { useEffect, useState, Fragment } from "react";

import Space from "../UI/Space";
import Container from "../UI/Container";
import Tranding from "../../Recommended/Tranding";

import HomeBanner from "../../assets/Home/grandeur-mobile-banner.png";
import HomeDesktopBanner from "../../assets/Home/grandeur-banner.webp";

import LuxFabric from "../Custom/LuxFabric";
import CustomSection from "../Custom/CustomSection";

import UserContact from "../Universal/UserContact";
import MoreComponent from "../Universal/MoreComponent";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const Banner = isDesktop ? (
    <img src={HomeDesktopBanner} alt="" />
  ) : (
    <img src={HomeBanner} alt="" />
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktop(window.innerWidth >= 800);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <Fragment>
      <Container>
        <PaddingWrapper>
          <Link to="fabric">{Banner}</Link>
        </PaddingWrapper>
      </Container>

      <Container>
        <Tranding title={"💥 Hot Selling Products"} />
        <Space>
          <PaddingWrapper>
            <MoreComponent title="⭐ ️Customized zone" link="#" />
          </PaddingWrapper>
          <CustomSection />
        </Space>
      </Container>

      <Space>
        <LuxFabric />
      </Space>

      <Container>
        <Tranding title={"💎 Deal of the Day"} />
      </Container>

      <Space>
        <UserContact />
      </Space>

      <Container>
        <Tranding title={"🎯 Insights For You"} />
      </Container>
    </Fragment>
  );
};

export default Home;
