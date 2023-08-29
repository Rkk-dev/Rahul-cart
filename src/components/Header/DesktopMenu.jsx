import { useEffect, useState } from "react";
import { FETCH_CATEGORY } from "../../config";
import { NavItem, NavTop, SubMenu } from "../Styled/DesktopHeaderUI";
import { styled } from "styled-components";

import ThinLine from "../UI/ThinLine";
import DesktopNav from "../Shimmer/DesktopNav";
import DesktopMenuItem from "./DesktopMenuItem";

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const DesktopMenu = () => {
  const [menu, setMenu] = useState([]);

  const emptyArray = menu.length === 0;

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(FETCH_CATEGORY);
      if (response.ok) {
        const data = await response.json();
        setMenu(data.data);
      }
    };

    fetchCategory().catch((err) => {
      console.log(err);
    });
  }, []);

  return emptyArray ? (
    <Wrapper>
      <DesktopNav />
    </Wrapper>
  ) : (
    menu.map((menu,index,arr) => {
      return (
        <NavItem key={menu.id}>
          <NavTop className="NavText">
            <div> {menu.mcat_name} </div>
             {index !== arr.length - 1 && <ThinLine />}
          </NavTop>
          <DesktopMenuItem categoryId={menu.mcat_uid} />
        </NavItem>
      );
    })
  );
};

export default DesktopMenu;
