import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#db4437]" : "font-light"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#db4437]" : "font-light"
          }
        >
          Available Foods
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex-1">
            <Link to="/" className="flex gap-2 items-center">
              <img className="w-auto h-7" src={logo} alt="" />
              <span className="font-bold text-xl text-[#db4437]">Be aHand</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-sm">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hover:bg-[#db4437] avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    "https://i.ibb.co/D4DRmzc/istockphoto-1337144146-612x612.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  <h1>Name</h1>
                </button>
              </li>
              <li>
                <button className="btn btn-sm  btn-ghost">Logout</button>
              </li>
            </ul>
          </div>

          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
