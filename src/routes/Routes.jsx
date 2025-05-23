import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Loading from "../components/Loading";
import Home from "../Page/Home";
import PrivateRoute from "../Provider/PrivateRoute";
import AddRoommate from "../Page/AddRoommate";
import UpdateRoommate from "../Page/UpdateRoommate";
import AdDetails from "../Page/AdDetails";
import ErrorPage from "../Page/ErrorPage";
import Register from "../Page/Register";
import Login from "../Page/Login";
import MyListing from "../Page/MyListing";
import BrowseListing from "../Page/BrowseListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/addRoommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateRoommate/:id",
        element: (
          <PrivateRoute>
            <UpdateRoommate></UpdateRoommate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allAds/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "ad/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allAds/${params.id}`),
        element: (
          <PrivateRoute>
            <AdDetails></AdDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "myListing",
        element: (
            <PrivateRoute>
                <MyListing></MyListing>
            </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "browseListing",
        element: <BrowseListing></BrowseListing>,
        loader: () => fetch("http://localhost:3000/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
