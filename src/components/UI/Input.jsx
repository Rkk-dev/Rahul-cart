import { styled } from "styled-components";

const InputWrapper = styled.div`
  padding: 0.5rem;
`;
const InputUI = styled.input`
  color: var(--white-color);
  display: block;
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #bbb;
  &:focus-visible {
    outline: none;
  }

  &:focus-visible,
  &:active {
    border-bottom: 1px solid var(--brand-color);
  }
`;

const Input = ({placeholder, type}) => {
  return (
    <InputWrapper>
      <InputUI
        placeholder={placeholder}
        type={type}
      />
    </InputWrapper>
  );
};

export default Input;
