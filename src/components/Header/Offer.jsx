import { Link } from "react-router-dom";
import { styled } from "styled-components";

const OfferWrapper = styled.section`
  background-color: var(--brand-color);
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 12px;
  & a {
    font-weight: 900;
    color: var(--white-color);
    text-decoration: underline;

  }
  & a:hover {
    text-decoration: none;
  }
  @media (min-width: 800px) {
    font-size: 14px;
  }
`;

const Offer = () => {
  return (
    <OfferWrapper>
      <span>Free Shipping across items of ₹5000/ - </span>
      <Link to="/"> Know More </Link>
    </OfferWrapper>
  );
};

export default Offer;
