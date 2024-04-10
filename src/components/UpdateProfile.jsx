import { useContext, useState } from "react";
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
    const [error, setError] = useState(null);

    const handleEditProfile = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(user, { displayName, photoURL });
            alert("Profile updated successfully");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleEditProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-gold">
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
