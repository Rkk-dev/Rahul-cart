import React, { useState } from "react";

import classes from "./DetailBox.module.css";
import ArrowIcon from "../../assets/UI/detailsArrow.svg";

const DetailBox = (props) => {

  const title = props.title ? props.title : "Description";
  const customStyle = props.style ? props.style : {};
  const isClosed = props.isClosed ? props.isClosed : false;
  
  const [hideContent, setHideContent] = useState(isClosed);

  const clickHandler = () => {
    setHideContent(!hideContent);
  };

  return (
    <section className={classes.details}>
      <div className="detailsContainer">
        <div className={classes.detailsHeader} onClick={clickHandler} style={customStyle}>
          <span> {title} </span>
          <img
            className={!hideContent ? `${classes.open}` : ""}
            src={ArrowIcon}
            alt=""
          />
        </div>
        {!hideContent && <div className={classes.detailsBody}>{props.children}</div>}
      </div>
    </section>
  );
};

export default DetailBox;
