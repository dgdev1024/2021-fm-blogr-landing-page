import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={32} height={18} {...props}>
      <path
        d="M0 0h32v2H0zm0 8h32v2H0zm0 8h32v2H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
