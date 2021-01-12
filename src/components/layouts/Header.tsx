import * as React from "react";
import { NavLink } from "react-router-dom";

export const Header: React.FunctionComponent<unknown> = () => {
  return (
    <nav className="bg-gray-900 mx-auto">
      <ul className="flex flex-row justify-between px-4 h-20">
        <li className="flex items-center text-white cursor-pointer hover:text-gray-300 ">
          <NavLink
            exact
            to="/"
            className="text-3xl font-semibold h-full pt-6 px-1 border-b-4"
            activeClassName="text-yellow-500 border-yellow-500"
          >
            UFC
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
