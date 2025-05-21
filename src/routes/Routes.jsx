import { createBrowserRouter } from "react-router";
// import ErrorPage from "../Pages/ErrorPage";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";
// import AuthLayout from "../Layouts/AuthLayout";
import MainLayouts from "../layouts/MainLayouts";
import Loading from "../components/Loading";
import Home from "../Page/Home";
import PrivateRoute from "../Provider/PrivateRoute";
import AddRoommate from "../Page/AddRoommate";
import UpdateRoommate from "../Page/UpdateRoommate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    // loader: () => fetch("/subscription.json"),
    hydrateFallbackElement: <Loading></Loading>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: 'addRoommate',
            element: (
                <PrivateRoute>
                    <AddRoommate></AddRoommate>
                </PrivateRoute>
            )
        },
        {
            path: 'updateRoommate',
            element: (
                <PrivateRoute>
                    <UpdateRoommate></UpdateRoommate>
                </PrivateRoute>
            )
        }
    ]
  },
//   {
//     path: "/profile",
//     element: (
//       <PrivateRoute>
//         <Profile></Profile>
//       </PrivateRoute>
//     ),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: "/auth",
//     element: <AuthLayout></AuthLayout>,
//     children: [
//       {
//         path: "/auth/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/auth/register",
//         element: <Register></Register>,
//       },
//       {
//         path: "/auth/forgetPass",
//         element: <ForgetPassPage></ForgetPassPage>,
//       },
//     ],
//   },
//   {
//     path: "/blog",
//     element: (
//       <PrivateRoute>
//         <Blog></Blog>
//       </PrivateRoute>
//     ),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: "/news-details/:id",
//     element: (
//       <PrivateRoute>
//         <SubscriptionDetails></SubscriptionDetails>
//       </PrivateRoute>
//     ),
//     loader: () => fetch("/subscription.json"),
//     hydrateFallbackElement: <Loading></Loading>,
//   },
//   {
//     path: "/*",
//     element: <ErrorPage></ErrorPage>,
//   },
]);

export default router;
