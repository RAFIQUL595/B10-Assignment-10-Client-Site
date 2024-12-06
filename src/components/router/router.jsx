import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import AllReviews from "../AllReviews/AllReviews";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddReview from "../AddReview/AddReview";
import MyReviews from "../MyReviews/MyReviews";
import GameWatchList from "../GameWatchList/GameWatchList";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/reviews/limit"),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/addReview",
        element: (
          <PrivetRouter>
            <AddReview></AddReview>
          </PrivetRouter>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivetRouter>
            <MyReviews></MyReviews>
          </PrivetRouter>
        ),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivetRouter>
            <GameWatchList></GameWatchList>
          </PrivetRouter>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
