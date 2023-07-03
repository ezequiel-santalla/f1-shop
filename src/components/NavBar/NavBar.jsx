import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => {

  return (
    <header className="bg-black">
      <nav class="flex items-center justify-between flex-wrap bg-black p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:scale-105">
          <Link to={"/"}>
            <img className="w-56 m-4" src={f1Logo} alt="F1 Logo" />
          </Link>
        </div>

        <div className="block lg:hidden me-3">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-500 hover:border-red-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div id="menu" className="w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
          <ul className="lg:flex items-center mx-5 text-xl text-white font-semibold">
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-6 hover:text-gray-400 lg:hover:scale-[115%]">
              <NavLink to={"/category/t-shirts"}>T-shirts</NavLink>
            </li>
            <li className="mt-4 flex lg:mt-0 lg:mx-6 hover:text-gray-400 lg:hover:scale-[115%]">
              <NavLink to={"/category/jackets"}>Jackets</NavLink>
            </li>
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-6 hover:text-gray-400 lg:hover:scale-[115%]">
              <NavLink to={"/category/hoodies"}>Hoodies</NavLink>
            </li>
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-6 hover:text-gray-400 lg:hover:scale-[115%]">
              <NavLink to={"/category/caps"}>Caps</NavLink>
            </li>
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-6 hover:text-gray-400 lg:hover:scale-[115%]">
              <NavLink to={"/category/login"}>Login</NavLink>
            </li>
          </ul>
        </div>

        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar
