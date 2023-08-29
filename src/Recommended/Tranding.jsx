import { useEffect, useState } from "react";
import { FETCH_PRODUCT_BY_CATEGORY } from "../config";
import { PaddingWrapper } from "../components/Styled/UIStyle";

import Card from "../components/UI/Card";
import Space from "../components/UI/Space";
import ScrollView from "../components/UI/ScrollView";
import SectionShimmer from "../components/Shimmer/SectionShimmer";
import MoreComponent from "../components/Universal/MoreComponent";


const Tranding = ({title}) => {

  const [trandingItems, setTrandingItems] = useState(null);
  let masterCategory = "64C8E5E446607";
  let subCategory = "64C8E60A2D471";
  const FETCH_URL = `${FETCH_PRODUCT_BY_CATEGORY}mcat_uid=${masterCategory}&scat_uid=${subCategory}`;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(FETCH_URL);
      const result = await response.json();
      if (result.status) {
        setTrandingItems(result.data);
      } else {
        throw new Error("Unable to fetch Data ");
      }
    };
    fetchProducts().catch((err) => {
      console.log(err);
    });
  }, []);

  let content;
  if (trandingItems === null) {
    content = <SectionShimmer />;
  }
  if (trandingItems) {
    content = trandingItems.map((tranding) => {
      return (
        <Card
          key={tranding.product_uid}
          id={tranding.product_uid}
          title={tranding.product_name}
          mainImg={tranding.product_image[0]}
          priceInfo={{
            final_price: tranding.final_price,
            base_price: tranding.base_price,
            discount_price: tranding.discount_price,
          }}
          link={`product/${tranding.product_uid}`}
        />
      );
    });
  }

  return (
    <Space>
      <PaddingWrapper>
        <MoreComponent title={title} link={'category/${}'} />
      </PaddingWrapper>
      <ScrollView>
        {content}
      </ScrollView>
    </Space>
  );
};

export default Tranding;
