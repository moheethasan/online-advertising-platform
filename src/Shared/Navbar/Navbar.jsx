import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import './Navbar.css'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItem = (
    <>
      <li>
        <Link className="uppercase font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase font-bold" to="/">
          About
        </Link>
      </li>
      <li>
        <Link className="uppercase font-bold" to="allCompany">
          All Company
        </Link>
      </li>
      <li>
        <Link className="uppercase font-bold" to="/">
          Services
        </Link>
      </li>
    </>
  );
  return (
    <div className="fixed px-8 z-10 bg-opacity-30 bg-black navbar text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"}>
          <img style={{ height: "75px", width: "130px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                className="rounded-full mx-2 md:mx-4"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <Link onClick={handleSignOut}>
              <a className="btn border-orange-500 bg-orange-500 text-white hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white">
                signOut
              </a>
            </Link>
          </>
        ) : (
          <Link
            className="btn border-orange-500 bg-orange-500 text-white hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
