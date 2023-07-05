import { NavLink } from "react-router-dom";

const TeamNavBar = () => {

  return (
    <div className="col-span-12">
      <ul className="flex justify-center my-4">
        <li className="m-4">
          <NavLink className="focus:bg-black focus:text-white focus:border-2 focus:border-red-500 rounded-xl p-2" to={"/team/alfa-romeo"}>Alfa Romeo</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-blue-950 focus:text-white focus:border-2 focus:border-black rounded-xl p-2" to={"/team/alpha-tauri"}>AlphaTauri</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-black focus:text-white focus:border-2 focus:border-blue-400 rounded-xl p-2" to={"/team/alpine"}>Alpine</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-green-600 focus:text-white focus:border-2 focus:border-yellow-200 rounded-xl p-2" to={"/team/aston-martin"}>Aston Martin</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-red-500 focus:text-white focus:border-2 focus:border-black rounded-xl p-2" to={"/team/ferrari"}>Ferrari</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-black focus:text-white focus:border-2 focus:border-red-500 rounded-xl p-2" to={"/team/haas"}>Haas</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-orange-400 focus:text-white focus:border-2 focus:border-black rounded-xl p-2" to={"/team/mclaren"}>McLaren</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-black focus:text-white focus:border-2 focus:border-red-500 rounded-xl p-2" to={"/team/mercedes"}>Mercedes</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-blue-950 focus:text-white focus:border-2 focus:border-red-500 rounded-xl p-2" to={"/team/red-bull"}>Red Bull</NavLink>
        </li>
        <li className="m-4">
          <NavLink className="focus:bg-blue-950 focus:text-white focus:border-2 focus:border-blue-400 rounded-xl p-2" to={"/team/williams"}>Williams</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default TeamNavBar