import * as React from "react";

function SvgIllustrationLaptopDesktop(props) {
  return (
    <svg width={974} height={786} {...props}>
      <defs>
        <linearGradient
          x1="0%"
          y1="27.97%"
          x2="100%"
          y2="72.03%"
          id="illustration-laptop-desktop_svg__c"
        >
          <stop stopColor="#FF8F71" offset="0%" />
          <stop stopColor="#FF3E55" offset="100%" />
        </linearGradient>
        <filter
          x="-16.5%"
          y="-28.5%"
          width="132.9%"
          height="157.1%"
          filterUnits="objectBoundingBox"
          id="illustration-laptop-desktop_svg__a"
        >
          <feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={20}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <rect
          id="illustration-laptop-desktop_svg__b"
          x={0}
          y={0}
          width={506}
          height={335.872}
          rx={3}
        />
        <path
          d="M3 0h692.9a3 3 0 013 3v14.105H0V3a3 3 0 013-3z"
          id="illustration-laptop-desktop_svg__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect
          stroke="#2D2E40"
          opacity={0.5}
          transform="matrix(1 0 0 -1 0 786)"
          x={59.5}
          y={59.5}
          width={665}
          height={667}
          rx={332.5}
        />
        <rect
          stroke="#2D2E40"
          opacity={0.25}
          transform="matrix(1 0 0 -1 0 786)"
          x={0.5}
          y={0.5}
          width={783}
          height={785}
          rx={391.5}
        />
        <rect
          fill="#2D2E40"
          opacity={0.08}
          transform="matrix(1 0 0 -1 0 786)"
          x={117}
          y={117}
          width={550}
          height={552}
          rx={275}
        />
        <g
          transform="translate(190 192)"
          filter="url(#illustration-laptop-desktop_svg__a)"
        >
          <rect
            fill="#535353"
            fillRule="nonzero"
            x={82}
            y={16}
            width={538}
            height={368}
            rx={12}
          />
          <rect
            fill="#1D1D25"
            fillRule="nonzero"
            x={85}
            y={19}
            width={532}
            height={362}
            rx={10}
          />
          <g transform="translate(99 32)">
            <mask id="illustration-laptop-desktop_svg__d" fill="#fff">
              <use xlinkHref="#illustration-laptop-desktop_svg__b" />
            </mask>
            <use
              fill="url(#illustration-laptop-desktop_svg__c)"
              fillRule="nonzero"
              xlinkHref="#illustration-laptop-desktop_svg__b"
            />
            <rect
              fill="#F9F6F6"
              fillRule="nonzero"
              mask="url(#illustration-laptop-desktop_svg__d)"
              x={-0.325}
              y={60.293}
              width={506}
              height={275.838}
              rx={3}
            />
            <g
              mask="url(#illustration-laptop-desktop_svg__d)"
              fillRule="nonzero"
            >
              <g transform="translate(71.475 37.46)">
                <rect fill="#FFF" width={106.646} height={256.541} rx={3} />
                <rect
                  fill="#FFF"
                  x={124.798}
                  width={238.251}
                  height={256.541}
                  rx={3}
                />
                <rect
                  fill="#E7E7E7"
                  x={135.009}
                  y={13.622}
                  width={217.83}
                  height={60.162}
                  rx={3}
                />
                <rect
                  fill="#E7E7E7"
                  x={135.009}
                  y={86.27}
                  width={64.668}
                  height={60.162}
                  rx={3}
                />
                <rect
                  fill="#E7E7E7"
                  x={215.561}
                  y={86.27}
                  width={137.278}
                  height={60.162}
                  rx={3}
                />
              </g>
            </g>
          </g>
          <g
            transform="translate(349)"
            fill="#4A5166"
            fillRule="nonzero"
            opacity={0.098}
          >
            <rect width={13.6} height={3} rx={1.5} />
            <rect x={16.8} width={3.2} height={3} rx={1.5} />
          </g>
          <g transform="translate(0 380)">
            <mask id="illustration-laptop-desktop_svg__f" fill="#fff">
              <use xlinkHref="#illustration-laptop-desktop_svg__e" />
            </mask>
            <use
              fill="#52526F"
              fillRule="nonzero"
              xlinkHref="#illustration-laptop-desktop_svg__e"
            />
            <rect
              fill="#2F2F47"
              fillRule="nonzero"
              mask="url(#illustration-laptop-desktop_svg__f)"
              x={292.371}
              y={-41.908}
              width={114.156}
              height={52.171}
              rx={10}
            />
          </g>
          <path
            d="M0 397h699a6 6 0 01-6 6H6a6 6 0 01-6-6z"
            fill="#393A56"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgIllustrationLaptopDesktop;
