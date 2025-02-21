import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoCartSharp } from "react-icons/io5";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();
  console.log(cart);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/" className="text-lg text-gray-300 hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="text-lg text-gray-300 hover:text-primary"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className="text-lg text-gray-300 hover:text-primary"
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart" className="btn btn-sm bg-transparent border-none">
          <IoCartSharp className="text-xl text-white" />
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </li>
      {user ? (
        <>
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-success btn-sm"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="btn btn-primary btn-sm">
            Login
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Website Name */}
        <div className="text-2xl font-playfair font-bold text-white">
          <Link to={"/"} className="flex flex-col text-center">
            <span>BISTRO BOSS</span>
            <span className="tracking-[6px] text-xl">Restaurant</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navOptions}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown md:hidden relative">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content absolute right-0 mt-3 w-48 bg-gray-800 text-gray-300 rounded-lg shadow-lg"
          >
            <div className="p-4 pl-8">{navOptions}</div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
