/**
 * @file components/footer/index.jsx
 * @brief Presents the footer at the end of the page.
 */

import React from "react";
import Logo from "../svg/logo";
import "./index.scss";

export default () => (
  <footer className="footer">
    <div className="container footer__container">
      <Logo className="footer__logo" />
      <div className="footer__links-strip">
        <p className="text text--bold text--dark-bg footer__links-strip-heading">
          Product
        </p>
        <a href="#" className="footer__link">
          Overview
        </a>
        <a href="#" className="footer__link">
          Pricing
        </a>
        <a href="#" className="footer__link">
          Marketplace
        </a>
        <a href="#" className="footer__link">
          Features
        </a>
        <a href="#" className="footer__link">
          Integrations
        </a>
      </div>
      <div className="footer__links-strip">
        <p className="text text--bold text--dark-bg footer__links-strip-heading">
          Company
        </p>
        <a href="#" className="footer__link">
          About
        </a>
        <a href="#" className="footer__link">
          Team
        </a>
        <a href="#" className="footer__link">
          Blog
        </a>
        <a href="#" className="footer__link">
          Careers
        </a>
      </div>
      <div className="footer__links-strip">
        <p className="text text--bold text--dark-bg footer__links-strip-heading">
          Connect
        </p>
        <a href="#" className="footer__link">
          Contact
        </a>
        <a href="#" className="footer__link">
          Newsletter
        </a>
        <a href="#" className="footer__link">
          LinkedIn
        </a>
      </div>
      <p className="text text--smaller text--dark-bg text--light footer__attribution">
        Challenge by{" "}
        <a
          className="footer__link footer__link--inherit"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="footer__link footer__link--inherit"
          href="https://dgdev1024.com"
          target="_blank"
        >
          Dennis Griffin
        </a>
        .
      </p>
    </div>
  </footer>
);
