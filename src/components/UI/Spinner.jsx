import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000000e0;
  padding: 6rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #f4f40b);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;
  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

const LoaderText = styled.div`
  color: #fff;
  font-weight: bold;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Loader></Loader>
      <LoaderText> Please Wait a Moment</LoaderText>
    </Wrapper>
  );
};

export default Spinner;
