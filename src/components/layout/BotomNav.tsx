import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCalendarAlt,
  faCameraRetro,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const BotomNav: React.FunctionComponent<unknown> = () => {
  return (
    <nav className="bg-gray-900 fixed bottom-0 left-0 w-full py-4">
      <ul className="grid grid-cols-4">
        <li className="mx-auto cursor-pointer">
          <Link to="/shop">
            <FontAwesomeIcon
              icon={faStoreAlt}
              className="text-4xl text-white hover:text-yellow-500"
            />
          </Link>
        </li>
        <li className="mx-auto cursor-pointer">
          <Link to="/rankings">
            <FontAwesomeIcon
              icon={faAward}
              className="text-4xl text-white hover:text-yellow-500"
            />
          </Link>
        </li>
        <li className="mx-auto cursor-pointer">
          <Link to="/gallery">
            <FontAwesomeIcon
              icon={faCameraRetro}
              className="text-4xl text-white hover:text-yellow-500"
            />
          </Link>
        </li>
        <li className="mx-auto cursor-pointer">
          <Link to="/next-events">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-4xl text-white hover:text-yellow-500"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
