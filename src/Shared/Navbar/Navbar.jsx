import { Link } from "react-router-dom"
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
    const navItem = <>
            <li><Link className="uppercase font-bold" to='/'>Home</Link></li>
            <li><Link className="uppercase font-bold" to='/'>About</Link></li>
            <li><Link className="uppercase font-bold" to='/'>Services</Link></li>
        </>
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
        <img style={{height: '75px', width: '130px'}} src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-orange-500 border-none text-white font-bold">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
