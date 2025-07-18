import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { SiBookmyshow } from "react-icons/si";
import { CgBrowse, CgProfile } from "react-icons/cg";
import { MdDarkMode, MdOutlineSpaceDashboard, MdPlaylistAddCircle } from "react-icons/md";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { BiLogOut, BiSupport } from "react-icons/bi";
import Swal from "sweetalert2";
import { IoDocumentOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

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
    <div className="navbar bg-gray-400 shadow-sm px-4">
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
                className={({ isActive }) => (isActive ? "border-b-2" : "")}
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
                to="/aboutUs"
              >
                <FaUserFriends />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/browseListing"
              >
                <CgBrowse />
                Browse Listing
              </NavLink>
            </li>
             {user ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/dashboard"
              >
                <MdOutlineSpaceDashboard />
                Dashboard
              </NavLink>
            </li>
          ) : (
            ""
          )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/support"
              >
                <BiSupport />
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/termOfUse"
              >
                <IoDocumentOutline />
                Terms
              </NavLink>
            </li>
            {/* {user ? (
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
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-black" : ""
                  }
                  to="/myListing"
                >
                  <SiBookmyshow />
                  My Listings
                </NavLink>
              </li>
            ) : (
              ""
            )} */}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="hidden lg:block w-10 rounded-xl"
            src="https://i.ibb.co/WNpY4jYv/logo.png"
            alt=""
          />
          <Link to="/" className="btn font-bold text-lg md:text-2xl bg-gray-400 border-none shadow-none">
            Find Mate
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
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
              to="/aboutUs"
            >
              <FaUserFriends />
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/browseListing"
            >
              <CgBrowse />
              Browse Listing
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/dashboard"
              >
                <MdOutlineSpaceDashboard />
                Dashboard
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/support"
            >
              <BiSupport />
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
              to="/termOfUse"
            >
              <IoDocumentOutline />
              Terms
            </NavLink>
          </li>
          {/* {user ? (
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
          ) : (
            ""
          )}
          {user ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
                to="/myListing"
              >
                <SiBookmyshow />
                My Listings
              </NavLink>
            </li>
          ) : (
            ""
          )} */}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 items-center">
          {!user ? (
            <div className="hidden md:block md:text-xl font-bold btn btn-outline border-black rounded-xl cursor-pointer md:pt-1">
              <Link to="/register" className="cursor-pointer">
                Register
              </Link>
            </div>
          ) : (
            ""
          )}

          {!user ? (
            <div className=" md:text-xl font-bold btn border-none  rounded-lg cursor-pointer">
              <Link to="/login" className="cursor-pointer">
                Login
              </Link>
            </div>
          ) : (
            ""
          )}
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
                <a className="text-2xl font-bold">
                  User : {user && user.displayName}
                </a>
              </li>
              {/* {user ? (
                <NavLink
                  to="/profile"
                  className="btn bg-black text-white cursor-pointer text-xl"
                >
                  <CgProfile />
                  Profile
                </NavLink>
              ) : (
                ""
              )} */}
              <button className="btn bg-black text-white cursor-pointer">
                <label className="swap swap-rotate">
                  <input type="checkbox" onClick={handleToggle} />
                  <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </button>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn bg-black text-white cursor-pointer text-xl"
                >
                  <BiLogOut />
                  Log out
                </button>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
