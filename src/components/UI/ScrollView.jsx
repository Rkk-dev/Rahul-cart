import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  overflow-x: auto;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem 2rem;
`;

const ScrollView = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ScrollView;
