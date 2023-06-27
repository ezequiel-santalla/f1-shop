import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => (
  <header className="bg-black flex items-center">
    <Link to={"/"}>
      <img className="w-60 p-4 ml-4" src={f1Logo} alt="F1 Logo" />
    </Link>

    <nav className="ml-auto">
      <ul className="text-white text-xl font-semibold flex space-x-4 px-8 py-4">
        {[
          { to: "/category/t-shirts", label: "T-shirts" },
          { to: "/category/jackets", label: "Jackets" },
          { to: "/category/hoodies", label: "Hoodies" },
          { to: "/category/caps", label: "Caps" },
          { to: "#", label: "LogIn" }
        ].map((item, index) => (
          <li key={index} className="p-4 cursor-pointer hover:text-gray-400">
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <CartWidget/>
  </header>
);

export default NavBar;