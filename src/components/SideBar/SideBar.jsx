import React from 'react'
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-span-2">
      <ul className="ms-16 mt-20">
        <li className="p-2">
          <Link className="focus:bg-black focus:text-white rounded-xl p-2" to={"/team/alfa-romeo"}>Alfa Romeo</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-blue-950 focus:text-white rounded-xl p-2" to={"/team/alpha-tauri"}>AlphaTauri</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-black focus:text-white rounded-xl p-2" to={"/team/alpine"}>Alpine</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-green-600 focus:text-white rounded-xl p-2" to={"/team/aston-martin"}>Aston Martin</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-red-500 focus:text-white rounded-xl p-2" to={"/team/ferrari"}>Ferrari</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-black focus:text-white rounded-xl p-2" to={"/team/haas"}>Haas</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-orange-400 focus:text-white rounded-xl p-2" to={"/team/mclaren"}>McLaren</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-black focus:text-white rounded-xl p-2" to={"/team/mercedes"}>Mercedes</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-blue-950 focus:text-white rounded-xl p-2" to={"/team/red-bull"}>Red Bull</Link>
        </li>
        <li className="p-2">
          <Link className="focus:bg-blue-400 focus:text-white rounded-xl p-2" to={"/team/williams"}>Williams</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar