import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = use(AuthContext)

  const handleLogOut = () => {
    // console.log("user trying to logout")
    logOut()
    .then(() => {
        toast.warning('Logged Out Successfully')
    })
    .catch(error => {
        toast.error(error)
    })
}
    return (
        <div className="navbar bg-gray-400 shadow-sm rounded-b-2xl px-4">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/addRoommate">Add Roommate</NavLink></li>
        <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/blog">Browse Listing</NavLink></li>
        <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/blog">My Listings</NavLink></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost font-bold text-2xl text-secondary">Find Mate</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/">Home</NavLink></li>
      <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/addRoommate">Add Roommate</NavLink></li>
      <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/blog">Browse Listing</NavLink></li>
      <li><NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              } to="/blog">My Listings</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex gap-4 items-center">
    <div className='text-white font-bold btn border-none bg-secondary rounded-lg cursor-pointer'>
  {user ? "" : <Link className='cursor-pointer'>Login</Link>} {/* to="/auth/login"*/}
    </div>
    <div className='text-white font-bold btn btn-outline border-secondary btn-info rounded-xl cursor-pointer'>
    {user ? "" : <Link className='cursor-pointer'>Signup</Link>} {/* to="/auth/login"*/}
    </div>
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img referrerPolicy='no-referrer' alt="Tailwind CSS Navbar component"
            src={`${user ? user.photoURL : "https://i.ibb.co.com/F4BxGnK2/user.png"}`} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='text-2xl font-bold text-secondary'>User : {user && user.displayName}</a></li>
        <button className='cursor-pointer'>Log out</button> {/* onClick={handleLogOut}*/}
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;
