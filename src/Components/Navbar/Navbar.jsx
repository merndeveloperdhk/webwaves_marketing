import React from "react";

const Navbar = () => {
  const navLink = (
    <>
      <li><a >Home</a></li>
      <li><a>About</a></li>
      <li><a>Services</a> </li>
      <li><a>Resume</a> </li>
      <li><a>Portfolio</a> </li>
      <li><a>Blog</a> </li>
    </>
  );
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="px-3 py-2 rounded-md bg-green-500 text-white cursor-pointer">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="px-3 py-2 rounded-md bg-green-700 text-white cursor-pointer">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
