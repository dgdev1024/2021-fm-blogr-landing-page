import * as React from "react";

function SvgIconArrowLight(props) {
  return (
    <svg width={10} height={7} {...props}>
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth={2}
        opacity={0.75}
        d="M1 1l4 4 4-4"
      />
    </svg>
  );
}

export default SvgIconArrowLight;
