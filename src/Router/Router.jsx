import {
    createBrowserRouter
  } from "react-router-dom";
  import Roots from "../root/Roots";
  import Home from "../pages/Home";
import ErrorElement from "../components/ErrorElement";
import ViewProperty from "../components/ViewProperty";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import Register from "../components/Register";
import UpdateProfile from "../components/UpdateProfile";
import ContactUs from "../components/ContactUs";
import UsersProfile from "../components/UsersProfile";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch(`/RealState.json`)
        },
        {
          path:`/RealState/:id`,
          element:<PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>,
          
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/update",
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
        {
            path:"/contact",
            element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
        },
        {
            path:"/user",
            element:<PrivateRoute><UsersProfile></UsersProfile></PrivateRoute>,
        }

       
      ]
    },
  ]);
  export default router;