import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import AllReviews from "../AllReviews/AllReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
      },
    ],
  },
]);

export default router;
