/**
 * @file components/header/index.jsx
 * @brief Displays the header fixed at the top of the page.
 */

import React, { useState, useRef, useEffect } from "react";
import Logo from "../svg/logo";
import IconHamburger from "../svg/icon-hamburger";
import IconClose from "../svg/icon-close";
import IconArrowDark from "../svg/icon-arrow-dark";
import IconArrowLight from "../svg/icon-arrow-light";
import DesktopSubmenu from "../desktop-submenu";
import MobileSubmenu from "../mobile-submenu";
import "./index.scss";

// The contents of our submenus.
const submenus = {
  product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  company: ["About", "Team", "Blog", "Careers"],
  connect: ["Contact", "Newsletter", "LinkedIn"],
};

export default ({
  shownOnMobile,
  setShownOnMobile,
  isSolid,
  useDesktopSubmenus,
}) => {
  const productRef = useRef(null);
  const companyRef = useRef(null);
  const connectRef = useRef(null);
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [desktopSubmenuPositions, setDesktopSubmenuPositions] = useState([
    0, 0, 0,
  ]);

  const toggleSubmenu = (submenuId) => {
    setActiveSubmenu((id) => (id === submenuId ? "" : submenuId));
  };

  const calculateDesktopSubmenuPosition = (submenuRef) => {
    const { x } = submenuRef.current.getBoundingClientRect();
    return x;
  };

  useEffect(() => {
    setDesktopSubmenuPositions([
      calculateDesktopSubmenuPosition(productRef),
      calculateDesktopSubmenuPosition(companyRef),
      calculateDesktopSubmenuPosition(connectRef),
    ]);
  }, [activeSubmenu]);

  return (
    <>
      <header
        className={`header ${shownOnMobile && "header--shown-on-mobile"} ${
          isSolid && "header--is-solid"
        }`}
      >
        <div className="container header__container">
          <Logo className="header__logo" />
          <button
            className="header__toggle"
            aria-label="Toggle Menu"
            title="Toggle Menu"
            onClick={() => setShownOnMobile((mobile) => !mobile)}
          >
            {shownOnMobile ? (
              <IconClose className="header__toggle-icon" />
            ) : (
              <IconHamburger className="header__toggle-icon" />
            )}
          </button>
          <nav className="header__nav">
            <div className="header__links">
              <div ref={productRef} className="header__submenu-group">
                <button
                  className={`header__submenu-toggle ${
                    activeSubmenu === "product" &&
                    "header__submenu-toggle--active"
                  }`}
                  onClick={() => toggleSubmenu("product")}
                >
                  <span className="header__submenu-title">Product</span>
                  {useDesktopSubmenus ? (
                    <IconArrowLight className="header__submenu-icon" />
                  ) : (
                    <IconArrowDark className="header__submenu-icon" />
                  )}
                </button>
                {useDesktopSubmenus || (
                  <MobileSubmenu
                    active={activeSubmenu === "product"}
                    links={submenus.product}
                  />
                )}
              </div>
              <div ref={companyRef} className="header__submenu-group">
                <button
                  className={`header__submenu-toggle ${
                    activeSubmenu === "company" &&
                    "header__submenu-toggle--active"
                  }`}
                  onClick={() => toggleSubmenu("company")}
                >
                  <span className="header__submenu-title">Company</span>
                  {useDesktopSubmenus ? (
                    <IconArrowLight className="header__submenu-icon" />
                  ) : (
                    <IconArrowDark className="header__submenu-icon" />
                  )}
                </button>
                {useDesktopSubmenus || (
                  <MobileSubmenu
                    active={activeSubmenu === "company"}
                    links={submenus.company}
                  />
                )}
              </div>
              <div ref={connectRef} className="header__submenu-group">
                <button
                  className={`header__submenu-toggle ${
                    activeSubmenu === "connect" &&
                    "header__submenu-toggle--active"
                  }`}
                  onClick={() => toggleSubmenu("connect")}
                >
                  <span className="header__submenu-title">Connect</span>
                  {useDesktopSubmenus ? (
                    <IconArrowLight className="header__submenu-icon" />
                  ) : (
                    <IconArrowDark className="header__submenu-icon" />
                  )}
                </button>
                {useDesktopSubmenus || (
                  <MobileSubmenu
                    active={activeSubmenu === "connect"}
                    links={submenus.connect}
                  />
                )}
              </div>
            </div>
            <div className="header__separator"></div>
            <div className="header__button-strip">
              <button className="header__button">Login</button>
              <button className="header__button header__button--signup">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </header>
      {useDesktopSubmenus && (
        <>
          <DesktopSubmenu
            active={activeSubmenu === "product"}
            links={submenus.product}
            xPosition={desktopSubmenuPositions[0]}
          />
          <DesktopSubmenu
            active={activeSubmenu === "company"}
            links={submenus.company}
            xPosition={desktopSubmenuPositions[1]}
          />
          <DesktopSubmenu
            active={activeSubmenu === "connect"}
            links={submenus.connect}
            xPosition={desktopSubmenuPositions[2]}
          />
        </>
      )}
    </>
  );
};
