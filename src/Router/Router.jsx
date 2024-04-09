import {
    createBrowserRouter
  } from "react-router-dom";
  import Roots from "../root/Roots";
  import Home from "../pages/Home";
import ErrorElement from "../components/ErrorElement";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
            
        }
       
      ]
    },
  ]);
  export default router;