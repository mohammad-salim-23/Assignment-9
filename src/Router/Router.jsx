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
        }

       
      ]
    },
  ]);
  export default router;