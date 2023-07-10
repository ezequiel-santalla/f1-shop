import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between flex-wrap bg-black p-2 relative">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:scale-105">
          <Link to={"/"}>
            <img className="w-56 m-4" src={f1Logo} alt="F1 Logo" />
          </Link>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
          <div className="lg:flex items-center mx-5 my-4 text-xl text-white font-medium">
            <button
              className="lg:hidden rounded-xl p-2"
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
            <ul
              className={`${
                menuOpen ? "block" : "hidden"
              } lg:flex items-center me-5 my-4 text-xl lg:my-0 text-white font-medium`}
            >
              <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
                <NavLink
                  className="rounded-xl p-2"
                  to={"/category/t-shirts"}
                  onClick={toggleMenu}
                >
                  T-shirts
                </NavLink>
              </li>
              <li className="mt-4 flex lg:mt-0 lg:mx-4">
                <NavLink
                  className="rounded-xl p-2"
                  to={"/category/jackets"}
                  onClick={toggleMenu}
                >
                  Jackets
                </NavLink>
              </li>
              <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
                <NavLink
                  className="rounded-xl p-2"
                  to={"/category/hoodies"}
                  onClick={toggleMenu}
                >
                  Hoodies
                </NavLink>
              </li>
              <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
                <NavLink
                  className="rounded-xl p-2"
                  to={"/category/caps"}
                  onClick={toggleMenu}
                >
                  Caps
                </NavLink>
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

