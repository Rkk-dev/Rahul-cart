import { styled } from "styled-components";
import AuthBgPattern from "../../assets/UI/bgForGoodView.png";

export const UserAuthContainer = styled.section`
  background-color: var(--black-color);
  background-image: url(${AuthBgPattern});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAuthSuccessContainer = styled(UserAuthContainer)`
  background-color: #fff;
  background-image: none;

  & div {
    width: 40vw;
    max-width: 400px;
  }
`;

export const UserAuthCard = styled.section`
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin: 1rem;
  max-width: 600px;
`;

export const UserAuthTitle = styled.section`
  color: var(--black-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
  padding: 0.5rem 0;

  & h2 {
    margin: 0.2rem 0;
  }

  @media (min-width: 800px) {
    padding: 2rem;
    font-size: 30px;
  }
`;

export const UserAuthError = styled.div`
  color: red;
  font-weight: bold;
  padding: 0 0.5rem;
  border-left: 1px solid red;
  margin: 0.5rem 0;
`;
