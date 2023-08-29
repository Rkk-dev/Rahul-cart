import { styled } from "styled-components";

const BasicButton = styled.button`
  width: ${props => props.fullWidth ? '100%': 'auto'};
  margin: ${props => props.padded ? '1rem 0 0' : '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 54px;
  background-color: var(--brand-color);
  font-weight: bold;
  text-transform: capitalize;
  color: var(--white-color);
  border: 2px solid var(--brand-color);
  transition: all 0.2s ease;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0px 4px 26px 0px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active {
    background-color: var(--white-color);
    color: var(--brand-color);
  }

`;

const LogoutButton = styled(BasicButton)`
  background-color: #be0404;
  color: var(--white-color);
  border:2px solid #be0404;

  &:hover,
  &:active {
    background-color: var(--white-color);
    color: #be0404;
    border: 2px solid #be0404;
  }
`;


export {BasicButton, LogoutButton};