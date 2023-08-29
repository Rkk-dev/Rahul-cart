import { styled } from "styled-components";

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;
const Rate = styled.span`
  color: var(--light-white-color);
  font-size: 14px;
  align-self: flex-end;
`;
const DiscountRate = styled.span`
  color: var(--black-color);
  font-size: 17.068px;
  font-style: normal;
  font-weight: 800;
  line-height: 14.224px;
`;
const DiscountPercent = styled.span`
  color: var(--light-white-color);
  font-size: 14px;
  align-self: flex-end;
`;

const Price = (props) => {
  return (
    <PriceWrapper>
      <DiscountRate>
        {props.final_price ? `₹${props.final_price}` : "₹2499"}
      </DiscountRate>
      <Rate>{props.base_price ? `₹${props.base_price}` : "₹5999"}</Rate>
      <DiscountPercent>
        {props.discount_percent ? props.discount_percent : "50"} % off
      </DiscountPercent>
    </PriceWrapper>
  );
};

export default Price;
