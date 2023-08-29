import React from "react";

import classes from '../../style/Loader.module.css';

const Loader = () => {
  return (
    <section className={classes.loadingIndicator}>
      <div className={classes.loadingIndicatorWrapper}>
        <div className="loadingTop">
            <div className={classes.loadingParent}>
                <div className={classes.loadingChild}></div>
            </div>
        </div>
        <div className={classes.loadingBottom}></div>
      </div>
    </section>
  );
};

export default Loader;
