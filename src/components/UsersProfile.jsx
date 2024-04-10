import { useContext } from "react";
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";

const UsersProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={user.photoURL}  /> 
                </figure>
                <div className="card-body">
                    <h2 className="card-title">User Name: {user.displayName}</h2> 
                    <h2 className="card-title">User Email: {user.email}</h2> 
                    <div className="card-actions justify-end">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersProfile;
