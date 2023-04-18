import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const routes = [
  { label: "Hot", path: "/hot" },
  { label: "New", path: "/new" },
  { label: "Top", path: "/top" },
  { label: "Rising", path: "/rising" },
];

function SideBar() {
  return (
    <div id="sidebar">
      <nav>{routes.map(({ label, path }) => {
        return(
          <Link key={label} to={path}>
            <span>{label}</span>
          </Link>
        )
      })}</nav>
      <ThemeToggle/>
    </div>
  );
}

export default SideBar;
