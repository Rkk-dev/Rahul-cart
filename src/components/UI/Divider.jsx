import { styled } from "styled-components";

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.color ? props.color : "#232121")};
  border: none;
  margin: 0.5rem 0;
`;

const Divider = (props) => {
  return <Hr {...props} />;
};

export default Divider;
