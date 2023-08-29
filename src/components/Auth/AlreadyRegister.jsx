import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding-top: 1rem;
  text-align: center;
  & a {
    color: var(--brand-color);
    text-decoration: underline;
    font-weight: bold;
  }
  & a:hover,
  & a:active {
    text-decoration: none;
  }
`;

const AlreadyRegister = () => {
  return (
    <Wrapper>
      <Link to="/signup"> New to Grandeur ? Create an Account </Link>
    </Wrapper>
  );
};

export default AlreadyRegister;
