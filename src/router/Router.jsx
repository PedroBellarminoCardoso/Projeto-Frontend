import {
  createBrowserRouter
} from "react-router-dom";

import Products from "../pages/Products/Products";
import Checkout from "../pages/Checkout/Checkout";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Products />
    },
    {
      path: "/checkout",
      element: <Checkout />
    }
  ]);