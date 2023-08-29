import { styled } from "styled-components";
import CustomizeCard from "../UI/CustomizeCard";

import ImgOne from "../../assets/customize/one.webp";
import ImgTwo from "../../assets/customize/two.webp";
import ImgThree from "../../assets/customize/three.webp";
import ImgFour from "../../assets/customize/four.webp";
import ImgFive from "../../assets/customize/five.webp";
import ImgSix from "../../assets/customize/six.webp";
import ImgSeven from "../../assets/customize/seven.webp";
import ImgEight from "../../assets/customize/eight.webp";


const allFabric = [
  {
    id: "f1",
    color: "#B43A4D",
    imgUrl: ImgOne,
    link: "fabric",
  },
  {
    id: "f2",
    color: "#0665b6",
    imgUrl: ImgTwo,
    link: "fabric",
    
  },
  {
    id: "f3",
    color: "#ede2da",
    imgUrl: ImgThree,
    link: "fabric",
    
  },
  {
    id: "f4",
    color: "#081e14",
    imgUrl: ImgFour,
    link: "fabric",
    
  },
  {
    id: "f5",
    color: "#13438e",
    imgUrl: ImgFive,
    link: "fabric",
    
  },
  {
    id: "f6",
    color: "#6a5a56",
    imgUrl: ImgSix,
    link: "fabric",
    
  },
  {
    id: "f7",
    color: "#a77b54",
    imgUrl: ImgSeven,
    link: "fabric",
    
  },
  {
    id: "f8",
    color: "#4c3424",
    imgUrl: ImgEight,
    link: "fabric",
    
  },
];


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 140px);
  gap: 1rem;
  overflow: auto;
  padding: 1rem;
`;

const CustomSection = () => {
  return (
    <Wrapper>
      {allFabric.map((fabric) => {
        return (
          <CustomizeCard
            key={fabric.id}
            color={fabric.color}
            src={fabric.imgUrl}
            link={fabric.link}
          />
        );
      })}
    </Wrapper>
  );
};

export default CustomSection;
