import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(error => console.error(error))
  }

  const url = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <Link to="/">Content</Link>
      </li>
      {user ? (
        <li>
          <Link onClick={handleLogout}>Logout</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user &&<li>
        <Link to="/">{user.displayName}</Link>
      </li>}
    </>
  );
  return (
    <div className="navbar py-3 bg-base-100 md:px-11">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {url}
          </ul>
        </div>
        <div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <div className="w-3/4">
              <img className="w-100" src={logo} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{url}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning mx-5">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
