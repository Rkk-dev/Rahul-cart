import React from "react";

import DummyFabric from "../../assets/customize/fabricBanner.png";

import Container from "../UI/Container";
import Space from "../UI/Space";
import Wrapper from "../UI/Wrapper";
import ScrollView from "../UI/ScrollView";
import Card from "../UI/Card";
import MoreComponent from "../Universal/MoreComponent";
import UserContact from "../Universal/UserContact";

const Fabric = () => {
  return (
    <>
      <section className="fabricBanner">
        <img src={DummyFabric} alt="" />
      </section>
      <Container>
        <Space>
          <Wrapper>
            <MoreComponent title="💥 Stuffs with this fabric" link="#" />
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
            <MoreComponent title="🎯 Insights For You" link="#" />
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
    </>
  );
};

export default Fabric;
