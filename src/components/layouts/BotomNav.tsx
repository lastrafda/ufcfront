import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCalendarAlt,
  faCameraRetro,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const links = [
  {
    exact: true,
    to: "/shop",
    icon: faStoreAlt,
    id: "link1",
  },
  {
    exact: true,
    to: "/rankings",
    icon: faAward,
    id: "link4",
  },
  {
    exact: true,
    to: "/gallery",
    icon: faCameraRetro,
    id: "link2",
  },
  {
    exact: true,
    to: "/next-events",
    icon: faCalendarAlt,
    id: "link3",
  },
];

export const BotomNav: React.FunctionComponent<unknown> = () => {
  return (
    <nav className="bg-gray-900 fixed bottom-0 left-0 w-full py-4">
      <ul className="grid grid-cols-4">
        {links.map((l) => (
          <li className="mx-auto cursor-pointer" key={l.id}>
            <NavLink
              exact={l.exact}
              to={l.to}
              className="text-white text-4xl hover:text-yellow-500"
              activeClassName="text-yellow-500"
            >
              {<FontAwesomeIcon icon={l.icon} />}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
