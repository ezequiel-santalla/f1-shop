import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => {

  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between flex-wrap bg-black p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:scale-105">
          <Link to={"/"}>
            <img className="w-56 m-4" src={f1Logo} alt="F1 Logo" />
          </Link>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
          <ul className="lg:flex items-center mx-5 my-4 text-xl text-white font-medium">
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
              <NavLink className="focus:bg-red-500 rounded-xl p-2" to={"/category/t-shirts"}>T-shirts</NavLink>
            </li>
            <li className="mt-4 flex lg:mt-0 lg:mx-4">
              <NavLink className="focus:bg-red-500 rounded-xl p-2" to={"/category/jackets"}>Jackets</NavLink>
            </li>
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
              <NavLink className="focus:bg-red-500 rounded-xl p-2" to={"/category/hoodies"}>Hoodies</NavLink>
            </li>
            <li className="mt-4 lg:flex lg:mt-0 lg:mx-4">
              <NavLink className="focus:bg-red-500 rounded-xl p-2" to={"/category/caps"}>Caps</NavLink>
            </li>
          </ul>
        </div>

        <CartWidget/>
      </nav>
    </header>
  )
}

export default NavBar
