import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCertificate,
  faRankingStar,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const topics = [
  { label: "Hot", path: "/hot", icon: faFire },
  { label: "New", path: "/new", icon: faCertificate },
  { label: "Top", path: "/top", icon: faRankingStar },
  { label: "Rising", path: "/rising", icon: faArrowTrendUp },
];

function SideBar() {
  return (
    <div id="sidebar">
      <p className="text-secondary">Topics</p>
      <nav>
        {topics.map(({ label, path, icon }) => {
          return (
            <Link key={label} to={path}>
              <FontAwesomeIcon className="icon" icon={icon} />
              <span className="ml-s">{label}</span>
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </div>
  );
}

export default SideBar;
