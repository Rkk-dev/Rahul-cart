import { styled } from "styled-components";

const DoublePatternContainer = styled.div`
  max-width: 1100px;
  @media (min-width: 800px) {
    margin: 2rem auto;
  }
`;

const PaddingWrapper = styled.div`
  padding: 1rem;
`;

const PaddingWrapperY = styled(PaddingWrapper)`
  padding: 1rem 0;
`;

const PaddingWrapperX = styled(PaddingWrapper)`
  padding: 0 1rem;
`;

const MarginWrapperY = styled.div`
  margin: 1.5rem 0;
  @media (min-width: 800px) {
    margin: 2rem 0;
  }
`;

export {
  DoublePatternContainer,
  PaddingWrapper,
  PaddingWrapperY,
  PaddingWrapperX,
  MarginWrapperY
};
