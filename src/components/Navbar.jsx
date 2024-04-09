import {Link, NavLink} from "react-router-dom"
const Navbar = () => {
    const navLinks = <>
     
     <li className="font-bold"><NavLink to="/">Home</NavLink></li>
    <li className="font-bold"><NavLink to="/services">Our Services</NavLink></li>
    <li className="font-bold"><NavLink to="/update">Update Profile</NavLink></li>
     
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 "
            >
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl flex gap-0">Prop<span className="text-gold font-bold text-2xl">Nets</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <Link to="/login"><button className="btn bg-gold text-white font-bold ">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
