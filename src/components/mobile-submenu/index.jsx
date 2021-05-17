/**
 * @file components/mobile-submenu/index.jsx
 * @brief On mobile devices, shows submenus inside of the mobile nav.
 */

import React from "react";
import "./index.scss";

export default ({ active, links }) => (
  <div className={`mobile-submenu ${active && "mobile-submenu--active"}`}>
    {links.map((link, index) => (
      <a key={index} href="#" className="mobile-submenu__link">
        {link}
      </a>
    ))}
  </div>
);
