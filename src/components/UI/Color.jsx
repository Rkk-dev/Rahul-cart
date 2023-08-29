import React from "react";
import { IMG_BASE_URL } from "../../config";
import DefaultImage from "../../assets/UI/defaultNoImage.jpg";
import classes from "../../style/Colors.module.css";

import { Tooltip } from "react-tooltip";

const Color = ({ colorId, colorImage, colorName }) => {
  const colorNameString = colorName ? colorName : "Unknown";
  const colorImageURL = colorImage
    ? `${IMG_BASE_URL}${colorImage}`
    : DefaultImage;

  return (
    <section id={colorId} className={classes.colorContainer}>
      <div className={classes.colorImage}>
        <img
          src={colorImageURL}
          alt=""
          data-tooltip-place="top"
          data-tooltip-id="my-element"
          data-tooltip-content={colorNameString.toUpperCase()}
          className="cursorPointer"
        />
        <Tooltip id="my-element" />
      </div>
      <div className={classes.colorName}>
        <span>{colorNameString}</span>
      </div>
    </section>
  );
};

export default Color;
