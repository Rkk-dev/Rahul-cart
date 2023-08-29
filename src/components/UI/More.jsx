import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Icon from "../../assets/UI/next-arrow.svg";

const MoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreTitle = styled.div`
  color: #020202;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
const MoreLink = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  & a:hover,
  & a:active {
    color:#000;
    transform: scale(1.05);
  }
`;

const More = (props) => {
  return (
    <MoreWrapper>
      <MoreTitle>{props.title}</MoreTitle>
      <MoreLink>
        <Link to={props.link}>
          <span> See all Products </span>
          <img src={Icon} alt="" />
        </Link>
      </MoreLink>
    </MoreWrapper>
  );
};

export default More;
