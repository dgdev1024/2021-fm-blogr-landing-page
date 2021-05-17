import * as React from "react";

function SvgBgPatternCircles(props) {
  return (
    <svg width={1014} height={1018} {...props}>
      <g transform="matrix(1 0 0 -1 0 1018)" fill="none" fillRule="evenodd">
        <rect
          fill="#3E4062"
          x={213}
          y={214}
          width={588}
          height={590}
          rx={294}
        />
        <rect
          stroke="#878D92"
          opacity={0.5}
          x={0.5}
          y={0.5}
          width={1013}
          height={1017}
          rx={506.5}
        />
        <rect
          stroke="#878D92"
          x={170.5}
          y={171.5}
          width={673}
          height={675}
          rx={336.5}
        />
      </g>
    </svg>
  );
}

export default SvgBgPatternCircles;
