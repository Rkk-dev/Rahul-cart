import { Link } from "react-router-dom";
import {
  HeaderUI,
  HeaderTopUI,
  HeaderSearchWrapper,
  HeaderBottomUI,
  HeaderNavContainer,
} from "../Styled/DesktopHeaderUI";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Divider from "../UI/Divider";
import DesktopMenu from "./DesktopMenu";
import ShoppingInfo from "../Universal/ShoppingInfo";

const Desktop = () => {
  return (
    <HeaderUI>
      <div>
        <section>
          <HeaderTopUI>
            <div>
              <Link to="">
                <Logo />
              </Link>
            </div>
            <HeaderSearchWrapper>
              <SearchBar />
            </HeaderSearchWrapper>
            <div>
              <ShoppingInfo />
            </div>
          </HeaderTopUI>
        </section>
        <Divider />
        <HeaderBottomUI>
          <nav>
            <HeaderNavContainer>
              <DesktopMenu />
            </HeaderNavContainer>
          </nav>
        </HeaderBottomUI>
      </div>
    </HeaderUI>
  );
};

export default Desktop;
