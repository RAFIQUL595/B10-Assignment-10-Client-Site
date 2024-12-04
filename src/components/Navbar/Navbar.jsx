import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/Chill Gamer.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-1 text-black ${
              isActive ? "bg-green-400 text-black rounded-md" : "text-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-1 text-black ${
              isActive ? "bg-green-400 text-black rounded-md" : "text-white"
            }`
          }
          to="/reviews"
        >
          All Reviews
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 py-1 text-black ${
                  isActive ? "bg-green-400 text-black rounded-md" : "text-white"
                }`
              }
              to="/addReview"
            >
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 py-1 text-black ${
                  isActive ? "bg-green-400 text-black rounded-md" : "text-white"
                }`
              }
              to="/myReviews"
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 py-1 text-black ${
                  isActive ? "bg-green-400 text-black rounded-md" : "text-white"
                }`
              }
              to="/myWatchlist"
            >
              Game Watchlist
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // Handle click outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".dropdown-container")) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-red-400 text-white">
      <div className="w-11/12 mx-auto navbar">
        {/* Navbar Start */}
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
              className="menu-sm dropdown-content gap-1 bg-red-400 rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl md:text-3xl">
            <img className="size-10" src={logo} alt="" />
            Chill Gamer
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-xl gap-3 px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {!user ? (
            <div className="flex space-x-2">
              <NavLink to="/login" className="btn btn-outline">
                <span className="text-white">Login</span>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline">
                <span className="text-white">Register</span>
              </NavLink>
            </div>
          ) : (
            <div className="relative dropdown-container">
              <button
                onClick={() => setDropdownOpen((prevState) => !prevState)}
                className="flex items-center space-x-2 btn btn-ghost"
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute -right-5 md:-right-9 lg:-right-16 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                  <div className="p-2 text-center text-xl">{user.displayName}</div>
                  <Link to="/">
                    <button
                      onClick={logout}
                      className="block text-center text-lg z-50 w-full p-2 text-red-500 hover:bg-gray-200 rounded-md"
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
