import * as React from "react";
import { Link } from "react-router-dom";

export const Header: React.FunctionComponent<unknown> = () => {
  return (
    <nav className="bg-gray-900 mx-auto">
      <ul className="flex flex-row justify-between px-4 h-20">
        <li className="flex items-center border-b-4 border-yellow-500 px-4 text-white cursor-pointer hover:text-gray-300 ">
          <Link to="/" className="text-3xl font-semibold text-yellow-500">
            UFC
          </Link>
        </li>
      </ul>
    </nav>
  );
};
