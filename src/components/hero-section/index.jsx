/**
 * @file components/hero-section/index.jsx
 * @brief Displays the hero section at the top of the page.
 */

import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/use-on-screen";
import "./index.scss";

export default ({ onIntersectChange }) => {
  const setinelRef = useRef(null);
  const _ = useOnScreen(setinelRef, onIntersectChange);

  return (
    <section className="hero">
      <div className="hero__scroll-setinel" ref={setinelRef}></div>
      <div className="container hero__container">
        <h1 className="heading heading--largest heading--dark-bg heading--center hero__heading">
          A modern publishing platform
        </h1>
        <p className="text text--dark-bg text--center hero__text">
          Grow your audience and build your online brand.
        </p>
        <div className="hero__button-strip">
          <button className="hero__button hero__button--inverse">
            Start for Free
          </button>
          <button className="hero__button">Learn More</button>
        </div>
      </div>
    </section>
  );
};
