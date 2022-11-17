import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Orders/Order";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home/>
        }, 
        {
          path: 'login',
          element: <Login/>
        }, 
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'checkOut/:id',
          loader: ({params}) => {
            return fetch(`http://localhost:5000/services/${params.id}`);
          },
          element: <PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Order/></PrivateRoute> 
        }
    ],
  },
]);

export default router;
