import { useSelector } from "react-redux";
import { useEffect, useState, Fragment } from "react";

import Offer from "../Header/Offer";
import Mobile from "../Header/Mobile";
import Desktop from "../Header/Desktop";
import Backdrop from "../Backdrop/Backdrop";

import ProfileDailog from "../Backdrop/ProfileDailog";

const Header = () => {
  const [mobileView, setMobileView] = useState(true);
  const [isInitialPhase, setIsInitialPhase] = useState(true);
  const modalStatus = useSelector((state) => state.modal.visible);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    };

    handleResize();
    setIsInitialPhase(false);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <Offer />
      {isInitialPhase && null}
      {!isInitialPhase && mobileView && <Mobile />}
      {!isInitialPhase && !mobileView && <Desktop />}
      {modalStatus && (
        <Backdrop>
          <ProfileDailog />
        </Backdrop>
      )}
    </Fragment>
  );
};

export default Header;
