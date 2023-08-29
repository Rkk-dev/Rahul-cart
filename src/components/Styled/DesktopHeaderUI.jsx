import { styled } from "styled-components";


const HeaderUI = styled.header`
  background-color: var(--black-color);
`;

const HeaderTopUI = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: auto;
  gap: 0 1rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 2rem;
`;

const HeaderSearchWrapper = styled.div`
  background: #2d2d2d;
  padding: 0.5rem 1rem;
`;

const HeaderSearchUI = styled(HeaderTopUI)`
  grid-template-columns: 1fr 10px 4fr 1fr;
  padding: 0;
`;

const HeaderBottomUI = styled.section`
  padding: 0 0;
`;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NavItem = styled.div`
  position: relative;
  z-index: var(--top);
  padding: 1rem 0.2rem;
  cursor: pointer;
  &:hover {
    .NavText {
      color: var(--brand-color);
    }
    section {
      display: block;
    }
  }
`;
const NavTop = styled.div`
  color: var(--white-color);
  font-size: 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const LoaderMenu = styled.div`
  color: #fff;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:0.2rem;
  cursor: not-allowed;
`;

const SubMenu = styled.section`
  display: none;
  position: absolute;
  background-color:var(--black-color);
  color: #fff;
  top: 46px;
  left: 0;
  font-size: 0.8rem;
  min-width: 200px;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 4px solid #fce700;
  border-radius: 0 0 0.5rem 0.5rem;

  & a {
    text-align: center;
    text-transform: capitalize;
    display: block;
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  & a:hover {
    background-color: #64616179;
  }
`;

export {
  HeaderUI,
  HeaderTopUI,
  HeaderSearchWrapper,
  HeaderSearchUI,
  HeaderBottomUI,
  HeaderNavContainer,
  NavItem,
  NavTop,
  LoaderMenu,
  SubMenu,
};
