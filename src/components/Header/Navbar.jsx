import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `lg:mx-2 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#23be0a] ${
            isActive
              ? "border border-[#23be0a] text-[#23be0a]"
              : "text-[#131313]"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/listedBook"}
        className={({ isActive }) =>
          `lg:mx-2 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#23be0a] ${
            isActive
              ? "border border-[#23be0a] text-[#23be0a]"
              : "text-[#131313]"
          }`
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        to={"/o"}
        className={({ isActive }) =>
          `lg:mx-2 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#23be0a] ${
            isActive
              ? "border border-[#23be0a] text-[#23be0a]"
              : "text-[#131313]"
          }`
        }
      >
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-white text-black shadow-sm work-sans px-10 lg:px-20">
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
              className="menu menu-sm dropdown-content bg-white border border-black rounded-box z-10 mt-3 w-52 p-2 shadow text-black text-lg opacity-90"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="btn-ghost text-3xl font-bold cursor-pointer group">
              <span className="group-hover:text-[#23BE0A] transition-colors duration-300">
                Book
              </span>{" "}
              <span className="group-hover:text-[#59C6D2] transition-colors duration-300">
                Vibe
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#131313] text-lg opacity-80 items-center">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-[#23BE0A] border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A]">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] border-[#59C6D2] text-white hover:bg-white hover:text-[#59C6D2]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
