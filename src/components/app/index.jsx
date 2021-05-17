/**
 * @file components/app/index.jsx
 * @brief The application's top-level component.
 */

import React, { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";
import Header from "../header";
import HeroSection from "../hero-section";
import EditorSection from "../editor-section";
import PhonesSection from "../phones-section";
import FreeSection from "../free-section";
import Footer from "../footer";

export default () => {
  const isOnDesktop = useMediaQuery("(min-width: 800px)");
  const [navShownOnMobile, setNavShownOnMobile] = useState(false);
  const [isNearTop, setNearTop] = useState(false);
  const onIntersectChange = (isIntersecting) => setNearTop(!isIntersecting);

  useEffect(() => {
    document.body.style.overflowY =
      isOnDesktop === false && navShownOnMobile === true ? "hidden" : "scroll";
    return () => (document.body.style.overflowY = "scroll");
  }, [isOnDesktop, navShownOnMobile]);

  return (
    <>
      <Header
        shownOnMobile={navShownOnMobile}
        setShownOnMobile={setNavShownOnMobile}
        isSolid={isNearTop}
        useDesktopSubmenus={isOnDesktop}
      />
      <main className="main">
        <HeroSection onIntersectChange={onIntersectChange} />
        <EditorSection />
        <PhonesSection />
        <FreeSection />
        <Footer />
      </main>
    </>
  );
};
