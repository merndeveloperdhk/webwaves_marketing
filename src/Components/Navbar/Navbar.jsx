"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const navLink = [
    {
      title:'Home',
      path:'/'
    },
    {
      title:'about',
      path:'/about'
    },
    {
      title:'Services',
      path:'/services'
    },
   
    {title:'Resume', path:'/resume'}, {title:'Portfolio', path:'/portfolio'}, {title:'Blog', path:'/blog'}
  ]
;
  return (
    <div>
      <div className="navbar bg-base-100 ">
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
              {navLink.map(link =><li key={link.path}><Link  href={link.path} className={`${pathName === link.path && "text-yellow-500"}`}>{link.title}</Link></li>)}
            </ul>
          </div>
          <a className="px-3 py-2 rounded-md cursor-pointer" title="webwaves marketing"><Image className="rounded-full" width={36} height={36} src="/Images/Digital marketing f.jpg" alt="logo"/></a>
        </div>
        
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex gap-3 text-sm">
          {navLink.map(link =><Link  key={link.path} href={link.path} className={`${pathName === link.path && "text-yellow-500 "}` } >{link.title}</Link>)}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-3 py-2 rounded-md bg-violet-400 text-white cursor-pointer">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
