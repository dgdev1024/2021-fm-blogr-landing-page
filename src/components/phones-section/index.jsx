/**
 * @file components/phones-section/index.jsx
 * @brief Displays the section with the heading "State of the Art infrastructure."
 */

import React from "react";
import Phones from "../../images/illustration-phones.svg";
import "./index.scss";

export default () => (
  <section className="phones">
    <div className="container phones__container">
      <img src={Phones} alt="Phones" className="phones__image" />
      <div className="phones__content">
        <h2 className="heading heading--larger heading--dark-bg phones__heading">
          State of the Art Infrastructure
        </h2>
        <p className="text text--smaller text--dark-bg phones__text">
          With reliability and speed in mind, worldwide data-centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  </section>
);
