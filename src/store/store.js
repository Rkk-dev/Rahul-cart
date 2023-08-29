import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modal";

import { loginReducer } from "./login";
import { userDetailReducer } from "./userDetails";
import { addToCartReducer } from "./addToCartSlice";
import { wishReducer } from "./wishlist";

export const store = configureStore({
  reducer: {
    loginSystem: loginReducer,
    modal: modalReducer,
    userInfo: userDetailReducer,
    cart: addToCartReducer,
    wish: wishReducer,
  },
});
