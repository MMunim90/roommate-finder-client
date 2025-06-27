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
import Profile from "../Page/Profile";
import AboutUs from "../Page/AboutUs";
import Support from "../Page/Support";
import TermsOfUse from "../Page/TermsOfUse";
import Faq from "../Page/Faq";
import DashBoard from "../Page/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://roommate-finder-server-eight.vercel.app/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      // {
      //   path: "/addRoommate",
      //   element: (
      //     <PrivateRoute>
      //       <AddRoommate></AddRoommate>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/updateRoommate/:id",
        element: (
          <PrivateRoute>
            <UpdateRoommate></UpdateRoommate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-eight.vercel.app/allAds/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "ad/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-eight.vercel.app/allAds/${params.id}`),
        element: (
          <PrivateRoute>
            <AdDetails></AdDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      // {
      //   path: "myListing",
      //   element: (
      //     <PrivateRoute>
      //       <MyListing></MyListing>
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch("https://roommate-finder-server-eight.vercel.app/allAds"),
      //   hydrateFallbackElement: <Loading></Loading>,
      // },
      {
        path: "browseListing",
        element: <BrowseListing></BrowseListing>,
        loader: () => fetch("https://roommate-finder-server-eight.vercel.app/allAds"),
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
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "support",
        element: <Support></Support>,
      },
      {
        path: "termOfUse",
        element: <TermsOfUse></TermsOfUse>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addRoommate",
        element: <PrivateRoute>
          <AddRoommate></AddRoommate>
        </PrivateRoute>,
      },
      {
        path: "/dashboard/myListing",
        element: <PrivateRoute>
          <MyListing></MyListing>
        </PrivateRoute>,
        loader: () => fetch("https://roommate-finder-server-eight.vercel.app/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        loader: () => fetch("https://roommate-finder-server-eight.vercel.app/allAds"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
