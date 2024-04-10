import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser } = useContext(AuthContext);
 const [show,setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if(password.length<6 ){
        alert("You must have use 6 character or more");
        return;
    }
     if(!passwordRegex.test(password)
    ){
        alert("you must have one uppercase and one lowercase character")
        return;
    }
    //    create User
    createUser(email, password)
      .then((result) => {
      alert("successfully Register")
          console.log(result.user);
       updateProfile(result.user,{
        displayName:name,
        photoURL:"https://lh3.googleusercontent.com/a/ACg8ocK7na_sy6062FxXUfmpCxfY4eCpsE3S4tUjkSGjJU0lyr1W4ao=s96-c"
      
       })
       .then(()=>{
         console.log("profile updated successfully")
       })
       .catch()
      
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
     
      <form onSubmit={handleRegister}>
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className="relative">
              <input
                  type={show ? "text":"password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span className="absolute md:left-auto right-32 top-4" onClick={()=>(setShow(!show))}>
                  {
                    show? <FaEyeSlash/> : <FaEye/>
                  }
                </span>
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gold">Register</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account{" "}
        <Link className="text-blue-500 font-bold" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;

