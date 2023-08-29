import { createBrowserRouter, ScrollRestoration } from "react-router-dom";

import Home from "../components/pages/Home";
import Cart from "../components/pages/Cart";
import Error from "../components/pages/Error";
import Fabric from "../components/pages/Fabric";
import RootLayout from "../components/pages/Root";
import Whislist from "../components/pages/Whislist";
import Checkout from "../components/pages/Checkout";
import Category from "../components/pages/Category";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";
import ProductDetail from "../components/pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <ScrollRestoration />
        <RootLayout />
      </>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "fabric", element: <Fabric /> },
      { path: "wishlist", element: <Whislist /> },
      { path: "checkout", element: <Checkout /> },
      { path: "cart", element: <Cart /> },
      { path: "category/:categoryMenu", element: <Category />},
    ],
  },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
]);
