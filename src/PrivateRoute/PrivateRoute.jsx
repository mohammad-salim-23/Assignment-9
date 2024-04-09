import { useContext } from "react";
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";
import {Navigate,useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span> 
        </>
    }
    if(user){
        return children;
    }
   return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;