/**
 * @file components/desktop-submenu/index.jsx
 * @brief On displays 800px and larger in width, displays a floating submenu
 * below the header.
 */

import React from "react";
import "./index.scss";

export default ({ xPosition, links, active }) => (
  <div
    style={{ left: xPosition }}
    className={`desktop-submenu ${active && "desktop-submenu--active"}`}
  >
    {links.map((link, index) => (
      <a key={index} href="#" className="desktop-submenu__link">
        {link}
      </a>
    ))}
  </div>
);
