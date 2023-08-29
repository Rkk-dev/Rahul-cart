import Icon from "../../assets/UI/loginPlease.png";
import { styled } from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  & img {
    width: 200px;
  }
`;

const AuthIcon = () => {
  return (
    <Wrapper>
      <img src={Icon} alt="" />
    </Wrapper>
  );
};

export default AuthIcon;
