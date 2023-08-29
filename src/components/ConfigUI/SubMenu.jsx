import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { FETCH_SUB_CATEGORY } from "../../config";
import MyLoader from "../Shimmer/MobileSubMenuShimmer";

import { FcDeleteDatabase } from "react-icons/fc";

const EmptyText = styled.div`
  font-weight: bold;
  padding: 0 0.5rem;
  display:flex;
  align-items:center;
  gap:0.5rem;
`;

const Menu = styled.ul`
  & li {
    background-color: #ffffff12;
    margin: 0.5rem 0;
    border-left: 4px solid var(--brand-color);
  }

  & a {
    display: block;
    padding: 0.5rem;
    text-transform: capitalize;
    transition: all 400ms;
  }

  & a:hover,
  & a:active {
    background: #b59f03;
    color: #fff;
  }
`;

const Box = styled.div`
  padding: 1rem 1.5rem;
`;

const SubMenu = ({ categoryId, onClick }) => {
  const [subCategoryData, setSubCategoryData] = useState(null);

  const fetchUrl = FETCH_SUB_CATEGORY + categoryId;
  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setSubCategoryData(data.data);
      } catch (err) {
        console.log("Error in fetching sub category data", err);
      }
    };
    fetchSubCategory();
  }, []);

  let content;
  if (subCategoryData === null) {
    content = <MyLoader />;
  }
  if (subCategoryData?.length === 0) {
    content = <EmptyText>  <FcDeleteDatabase size={"30px"} /> Empty Category   </EmptyText>;
  }
  if (subCategoryData?.length) {
    content = (
      <Menu>
        {subCategoryData?.map((sc) => {
          return (
            <li key={sc.scat_uid} onClick={onClick}>
              <Link
                to={`category/${sc.scat_name}`}
                state={{
                  name: sc.scat_name,
                  mcat_uid: categoryId,
                  scat_uid: sc.scat_uid,
                  info: sc.scat_desc,
                }}
              >
                {sc.scat_name}
              </Link>
            </li>
          );
        })}
      </Menu>
    );
  }
  return <Box> {content} </Box>;
};

export default SubMenu;
