import Input from "../UI/Input";
import ThinLine from "../UI/ThinLine";
import { styled } from "styled-components";
import SearchIcon from "../../assets/Header/search.svg";
import { HeaderSearchUI } from "../Styled/DesktopHeaderUI";

const InputWrapper = styled.div`
  justify-self: normal;
`;
const SearchBtnWrapper = styled.div`
  & div {
    background-color: var(--brand-color);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  & div:hover {
    transform: scale(1.1);
  }

  & img {
    width: 20px;
  }
`;

const SearchBar = () => {
  return (
    <HeaderSearchUI as="form">
      <div>
        <select name="category">
          <option value="all">All Category</option>
          <option value="sofa">Sofa Set</option>
          <option value="bedsheet">Bedsheet</option>
          <option value="curtain">Curtains</option>
        </select>
      </div>
      <ThinLine />
      <InputWrapper>
        <Input placeholder="Search for something..." />
      </InputWrapper>
      <SearchBtnWrapper>
        <div>
          <img src={SearchIcon} alt="" />
        </div>
      </SearchBtnWrapper>
    </HeaderSearchUI>
  );
};

export default SearchBar;
