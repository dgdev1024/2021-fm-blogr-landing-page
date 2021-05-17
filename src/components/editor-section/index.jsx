/**
 * @file components/editor-section/index.jsx
 * @brief Displays the section with the heading "Designed for the future".
 */

import React from "react";
import "./index.scss";

export default () => (
  <section className="editor">
    <div className="container editor__container">
      <h2 className="heading heading--center heading--larger editor__heading editor__top-heading">
        Designed for the future
      </h2>
      <div className="editor__background-image"></div>
      <div className="editor__content">
        <div className="editor__content-block">
          <h2 className="heading editor__heading">
            Introducing an extensible editor
          </h2>
          <p className="text editor__text">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="editor__content-block">
          <h2 className="heading editor__heading">Robust content management</h2>
          <p className="text editor__text">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </div>
    </div>
  </section>
);
