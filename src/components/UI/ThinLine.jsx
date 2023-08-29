import { styled } from "styled-components";

const HrComponent = styled.hr`
  width: 1px;
  height: 10px;
  background-color: #707070;
  border: none;
  margin: 0px;
`;

const ThinLine = () => {
  return <HrComponent />;
};

export default ThinLine;
