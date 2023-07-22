import { NavLink, useLocation } from "react-router-dom";

const TeamNavBar = () => {
  const location = useLocation();

  return (
    <div className="col-span-12">
      <ul className="flex flex-wrap justify-center items-center my-4">
        <li className={`mx-4 p-3 ${location.pathname === "/team/alfa-romeo" ? "bg-black text-white rounded-md" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/alfa-romeo"}>Alfa Romeo</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/alpha-tauri" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/alpha-tauri"}>AlphaTauri</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/alpine" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/alpine"}>Alpine</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/aston-martin" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/aston-martin"}>Aston Martin</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/ferrari" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/ferrari"}>Ferrari</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/haas" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/haas"}>Haas</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/mclaren" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/mclaren"}>McLaren</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/mercedes" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/mercedes"}>Mercedes</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/red-bull" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/red-bull"}>Red Bull</NavLink>
        </li>
        <li className={`mx-4 p-3 ${location.pathname === "/team/williams" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded-md duration-300`}>
          <NavLink to={"/team/williams"}>Williams</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TeamNavBar;





