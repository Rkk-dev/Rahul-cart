import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FcEmptyTrash } from "react-icons/fc";
import { FETCH_SUB_CATEGORY } from "../../config";
import { LoaderMenu, SubMenu } from "../Styled/DesktopHeaderUI";


const DesktopMenuItem = ({ categoryId }) => {
  const [subMenu, setSubMenu] = useState([]);
  const fetchUrl = FETCH_SUB_CATEGORY + categoryId;

  useEffect(() => {
    const fetchSubCategory = async () => {
      const response = await fetch(fetchUrl, { mode: "cors" });
      if (response.ok) {
        const data = await response.json();
        setSubMenu(data.data);
        console.log(data);
      } else {
        throw new Error("Empty Subcategory");
      }
    };

    fetchSubCategory().catch((err) => console.log(err));
  }, []);

  let content;

  if (!subMenu?.length) {
    content = <LoaderMenu>  Empty Category <FcEmptyTrash size={20} /></LoaderMenu>;
  }

  if (subMenu?.length) {
    content = subMenu?.map((sm) => (
      <Link
        state={{
          mcat_uid: categoryId,
          scat_uid: sm.scat_uid,
          name: sm.scat_name,
          info: sm.scat_desc,
        }}
        key={sm.id}
        to={`category/${sm.scat_name}`}
      >
        {sm.scat_name}
      </Link>
    ));
  }


  return <SubMenu>
    {content}
  </SubMenu>;
};

export default DesktopMenuItem;

/*
  return subMenu?.length === 0
    ? ""
    : subMenu.map((sm) => {
        if(sm.length === 0) {
          return <h4> Empty Subcategory</h4>
        }
        if(sm.length !== 0) {
          return (
            <Link
              state={{
                mcat_uid: categoryId,
                scat_uid: sm.scat_uid,
                name: sm.scat_name,
                info: sm.scat_desc,
              }}
              key={sm.id}
              to={`category/${sm.scat_name}`}
            >
              <div className={classes.navItemBottomContainer}>
                <h4>{sm.scat_name}</h4>
              </div>
            </Link>
          );
        }
        
      });
*/
