import { styled } from "styled-components";

const OptionWrapper = styled.div`
  color: var(--brand-color);
  font-size: 9px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BuyingOptions = () => {
  return (
    <OptionWrapper>
      <span>Free Delivery | EMI Available | Colors Available</span>
    </OptionWrapper>
  );
};

export default BuyingOptions;
