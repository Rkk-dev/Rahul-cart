import ContentLoader from "react-content-loader";
import ScrollView from "../UI/ScrollView";

import { styled } from "styled-components";

const Wrapper = styled.section`
  flex-shrink: 0;
  width: 300px;
`;

const DoorDashFavorite = (props) => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="100%" height="9" />
    <rect x="44" y="323" rx="3" ry="3" width="100%" height="6" />
    <rect x="42" y="77" rx="10" ry="10" width="100%" height="217" />
  </ContentLoader>
);

const SectionShimmer = () => {
  return (
    <ScrollView>
      <Wrapper>
        <DoorDashFavorite />
      </Wrapper>
      <Wrapper>
        <DoorDashFavorite />
      </Wrapper>
      <Wrapper>
        <DoorDashFavorite />
      </Wrapper>
      <Wrapper>
        <DoorDashFavorite />
      </Wrapper>
      <Wrapper>
        <DoorDashFavorite />
      </Wrapper>
    </ScrollView>
  );
};

export default SectionShimmer;
