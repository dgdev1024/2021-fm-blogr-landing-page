/**
 * @file components/free-section/index.jsx
 * @brief Dipslays the section starting with the heading "Free, open, simple".
 */

import React from "react";
import "./index.scss";

export default () => (
  <section className="free">
    <div className="container free__container">
      <div className="free__background-image"></div>
      <div className="free__content">
        <div className="free__content-block">
          <h2 className="heading heading--smaller free__heading">
            Free, open, simple
          </h2>
          <p className="text text--smaller free__text">
            Blogr is a free and open-source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and relatively easy to learn.
          </p>
        </div>
        <div className="free__content_block">
          <h2 className="heading heading--smaller free__heading">
            Powerful tooling
          </h2>
          <p className="text text--smaller free__text">
            Batteries included. We built a simple and straightforward{" "}
            <span title="Command-Line Interface" className="text--tooltip">
              CLI
            </span>{" "}
            tool that makes customization and deployment a breeze, but capable
            of producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  </section>
);
