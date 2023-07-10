import { NavLink } from "react-router-dom";

const TeamNavBar = () => {
  return (
    <div className="col-span-12">
      <ul className="flex flex-wrap justify-center my-4">
        <li className="m-4 px-3">
          <NavLink to={"/team/alfa-romeo"}>
            <span className="group-hover:bg-gray-200">Alfa Romeo</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/alpha-tauri"}>
            <span className="group-hover:bg-gray-200">AlphaTauri</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/alpine"}>
            <span className="group-hover:bg-gray-200">Alpine</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/aston-martin"}>
            <span className="group-hover:bg-gray-200">Aston Martin</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/ferrari"}>
            <span className="group-hover:bg-gray-200">Ferrari</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/haas"}>
            <span className="group-hover:bg-gray-200">Haas</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/mclaren"}>
            <span className="group-hover:bg-gray-200">McLaren</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/mercedes"}>
            <span className="group-hover:bg-gray-200">Mercedes</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/red-bull"}>
            <span className="group-hover:bg-gray-200">Red Bull</span>
          </NavLink>
        </li>
        <li className="m-4 px-3">
          <NavLink to={"/team/williams"}>
            <span className="group-hover:bg-gray-200">Williams</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TeamNavBar;



