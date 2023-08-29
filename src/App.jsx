import { useEffect } from "react";
import { router } from "./routing/route";
import { loginAction } from "./store/login";
import { ToastContainer } from "react-toastify";
import { getData, setData } from "./util/local";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetailActions } from "./store/userDetails";
import { addToCartActions } from "./store/addToCartSlice";

import "react-toastify/dist/ReactToastify.css";

import { getCustomerId } from "./config";

const App = () => {

  console.log(getCustomerId());

  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart);

  useEffect(() => {

    const userInfo = getData("userInfo");
    const cartDetials = getData("myCart");

    if (userInfo) {
      dispatch(userDetailActions.updateUserDetails(userInfo));
      dispatch(loginAction.logIn());
    }
    if (cartDetials) {
      dispatch(addToCartActions.updateCart(cartDetials));
    }

  }, []);

  useEffect(() => {
    setData("myCart", myCart);
  }, [myCart]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
