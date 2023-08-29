import { styled } from "styled-components";

const OrderWrapper = styled.section`
  font-weight: bold;
`;
const OrderTitle = styled.h2`
  color: #000;
  font-weight: 600;
`;
const OrderDataList = styled.dl``;
const SpecialDD = styled.dd`
  color: var(--brand-color);
  font-size: 14px;
`;
const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;
const TotalWrapper = styled(ListWrapper)`
  border-top: 4px dotted #ccc;
  margin-top: 1rem;
  padding: 0.5rem 0;
  & * {
    color: var(--brand-color);
    font-size: 20px;
    font-weight: bold;
  }
`;

const OrderSummery = () => {
  return (
    <OrderWrapper>
      <OrderTitle> Order Summery </OrderTitle>
      <OrderDataList>
        <ListWrapper>
          <dt> Price (1 Item ) </dt>
          <dd> ₹30,0000 </dd>
        </ListWrapper>
        <ListWrapper>
          <dt> Discount </dt>
          <dd> -₹30,0000 </dd>
        </ListWrapper>
        <ListWrapper>
          <dt> Delivery Charges </dt>
          <SpecialDD> Free Delivery </SpecialDD>
        </ListWrapper>
        <TotalWrapper>
          <dt>Order Total</dt>
          <dd>₹30,0000</dd>
        </TotalWrapper>
      </OrderDataList>
    </OrderWrapper>
  );
};

export default OrderSummery;
