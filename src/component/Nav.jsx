// import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../provider/AuthProvider";
import logo from "./../../public/img/logo.png";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const navRoute = (
    <>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? " border-b-2 border-purple-700 text-purple-500 bg-transparent py-2 px-3 mx-2  font-bold"
            : "border-b-2 border-transparent  py-2 px-3 mx-2 font-bold hover:border-purple-500 hover:text-purple-500 hover:bg-transparent transition-all"
        }
      >
        Home
      </NavLink>
    </>
  );

  return (
    <div>
      {/* ****** */}
      <div className="navbar bg-base-100 px-0">
        <div className="navbar-start z-30">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navRoute}
            </ul>
          </div>
          <a
            href="/"
            className=" lg:text-4xl text-2xl flex gap-2 items-center font-bold font-pacifico text-purple-600"
          >
            <img src={logo} alt="logo" className=" md:w-14 w-8 rounded-lg" />
            ShopTech
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navRoute}</ul>
        </div>
        <div className="navbar-end">
          {/* Dropdown Menu */}

          {/* ======== */}
          {user ? (
            <>
              <details className="dropdown dropdown-bottom dropdown-end z-30">
                <summary className="block py-2 ">
                  <div>
                    {user.photoURL ? (
                      <img
                        className="md:w-14 md:h-14 w-10 h-10 cursor-pointer rounded-full border-2 object-cover "
                        title={user.displayName}
                        src={user.photoURL}
                        alt="Profile"
                      />
                    ) : (
                      <img
                        className="md:w-14 md:h-14 w-10 h-10 rounded-full cursor-pointer border-2  object-cover "
                        src="https://i.ibb.co/X3yrLFJ/pngegg.png"
                        alt=""
                      />
                    )}
                  </div>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-56">
                  <li className=" disabled cursor-pointer">
                    <p className="disabled ">{user?.displayName}</p>
                  </li>
                  <li className=" disabled cursor-pointer">
                    <p>{user?.email}</p>
                  </li>

                  <li>
                    <button onClick={logOut}>Log Out</button>
                  </li>
                </ul>
              </details>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
