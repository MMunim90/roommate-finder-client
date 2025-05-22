import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { SiBookmyshow } from "react-icons/si";
import { CgBrowse } from "react-icons/cg";
import { MdDarkMode, MdPlaylistAddCircle } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log("user trying to logout")
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="navbar bg-gray-400 shadow-sm rounded-b-2xl px-4">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/"
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/addRoommate"
              >
                <MdPlaylistAddCircle />
                Add to Find
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/blog"
              >
                <CgBrowse />
                Browse Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/blog"
              >
                <SiBookmyshow />
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="hidden lg:block w-10 rounded-xl"
            src="https://i.ibb.co/WNpY4jYv/logo.png"
            alt=""
          />
          <Link
            to="/"
            className="btn btn-ghost font-bold text-lg md:text-2xl text-secondary"
          >
            Find Mate
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/"
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/addRoommate"
            >
              <MdPlaylistAddCircle />
              Add to Find
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/blog"
            >
              <CgBrowse />
              Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/blog"
            >
              <SiBookmyshow />
              My Listings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 items-center">
          {
            !user ? <div className="text-white md:text-xl font-bold btn btn-outline border-secondary hover:bg-secondary rounded-xl cursor-pointer">
              <Link to="/register" className="cursor-pointer">
                Register
              </Link>
          </div> : ""
          }

          {
            !user ? <div className="text-white md:text-xl font-bold btn border-none bg-secondary rounded-lg cursor-pointer">
              <Link to="/login" className="cursor-pointer">
                Login
              </Link>
          </div> : ""
          }
          <div className="dropdown dropdown-hover dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="Tailwind CSS Navbar component"
                  src={`${
                    user
                      ? user.photoURL
                      : "https://i.ibb.co.com/F4BxGnK2/user.png"
                  }`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <a className="text-2xl font-bold text-secondary">
                  User : {user && user.displayName}
                </a>
              </li>
              <button className="btn bg-secondary text-white cursor-pointer">
                <MdDarkMode />
                Dark Mode
              </button>
              {
                user ? <button
                onClick={handleLogOut}
                className="btn bg-secondary text-white cursor-pointer"
              >
                <BiLogOut />
                Log out
              </button> : ""
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
