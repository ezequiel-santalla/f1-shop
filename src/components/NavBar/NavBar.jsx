import CartWidget from "../CartWidget/CartWidget";
import f1Logo from "../../../public/f1Logo.png";

const NavBar = () => (
  <header className="bg-black grid grid-cols-3 items-center">
    <img className="col-start-1 w-60 p-4 ms-16 cursor-pointer" src={f1Logo} alt="F1 Logo" />

    <nav className="col-start-4">
      <ul className="text-white text-xl font-semibold flex ps-8 pt-4 pe-8 pb-4">
        {['Team', 'Driver', 'Men', 'Women', 'Kids'].map((item, index) => (
          <li key={index} className="p-4 cursor-pointer hover:text-gray-400">{item}</li>
        ))}
      </ul>
    </nav>

    <CartWidget />
  </header>
);

export default NavBar;
