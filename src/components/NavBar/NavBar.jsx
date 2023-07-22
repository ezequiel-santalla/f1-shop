import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between flex-wrap bg-black relative">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:scale-105 duration-500">
          <Link to={"/"}>
            <img className="w-56 m-4" src={f1Logo} alt="F1 Logo" />
          </Link>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
          <div className="lg:flex items-center mx-5 my-4 text-xl text-white font-medium">
            <button className="lg:hidden rounded-xl p-2" onClick={toggleMenu}>
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
            <ul className={`${menuOpen ? "block" : "hidden"} lg:flex items-center me-5 my-4 text-xl lg:my-0 text-white font-medium`}>
              <li className={`mt-4 lg:flex lg:mt-0 lg:mx-4 hover:bg-white hover:text-black ${location.pathname === "/category/t-shirts" ? "bg-white text-black rounded-md" : "hover:rounded-md"} duration-300`}>
                <NavLink className="rounded-xl p-2" onClick={toggleMenu} to={"/category/t-shirts"}>T-shirts</NavLink>
              </li>

              <li className={`mt-4 lg:flex lg:mt-0 lg:mx-4 hover:bg-white hover:text-black ${location.pathname === "/category/jackets" ? "bg-white text-black rounded-md" : "hover:rounded-md"} duration-300`}>
                <NavLink className="rounded-xl p-2" onClick={toggleMenu} to={"/category/jackets"}>Jackets</NavLink>
              </li>

              <li className={`mt-4 lg:flex lg:mt-0 lg:mx-4 hover:bg-white hover:text-black ${location.pathname === "/category/hoodies" ? "bg-white text-black rounded-md" : "hover:rounded-md"} duration-300`}>
                <NavLink className="rounded-xl p-2" onClick={toggleMenu} to={"/category/hoodies"}>Hoodies</NavLink>
              </li>

              <li className={`mt-4 lg:flex lg:mt-0 lg:mx-4 hover:bg-white hover:text-black ${location.pathname === "/category/caps" ? "bg-white text-black rounded-md" : "hover:rounded-md"} duration-300`}>
                <NavLink className="rounded-xl p-2" onClick={toggleMenu} to={"/category/caps"}>Caps</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;


