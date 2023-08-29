import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Item = styled.div`
  border-radius: 24px;
  background: var(--white-light-color);
  background-repeat: no-repeat;
  background-position: -50%;
  background-size: 120%;
  position: relative;
  overflow: hidden;
  transition: all 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const Color = styled.div`
  width: 200px;
  height: 200px;
  margin-left: -4.5rem;
  margin-top: -2rem;
  border-radius: 50%;
  filter: blur(20px);
`;
const Text = styled.span`
  position: absolute;
  left: 5%;
  bottom: 12%;
  color: #fff;
  font-size: 15px;
  font-family: Lato;
  font-weight: 600;
  line-height: 20px;
  border-bottom: 1px solid #fff;
  text-decoration: none;
`;

const CustomizeCard = (props) => {
  return (
    <Item bg={`${props.src}`} style={{ backgroundImage: `url(${props.src})` }}>
      <Link to={props.link}>
        <Color style={{ backgroundColor: props.color }}></Color>
        <Text>I want This💫</Text>
      </Link>
    </Item>
  );
};

export default CustomizeCard;
