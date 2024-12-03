import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className=" bg-red-400 text-white">
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
              className="menu menu-sm dropdown-content bg-red-400 rounded-box z-[1] mt-3 w-36 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">All Reviews</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/addReview">Add Review</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myReviews">My Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myWatchlist">Game Watchlist</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Chill Gamer
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">All Reviews</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/addReview">Add Review</NavLink>
                </li>
                <li>
                  <NavLink to="/myReviews">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/myWatchlist">Game Watchlist</NavLink>
                </li>
              </>
            )}
          </ul>
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
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 btn btn-ghost"
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <div className="p-2 text-center">{user.displayName}</div>
                  <button
                    onClick={onLogout}
                    className="block w-full text-left p-2 text-red-500 hover:bg-gray-200"
                  >
                    Log Out
                  </button>
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
