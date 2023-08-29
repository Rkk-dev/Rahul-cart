import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  & h2 {
    color: var(--black-color);
    margin: 0;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
`;

const ProductTitle = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  );
};

export default React.memo(ProductTitle);
