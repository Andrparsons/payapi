import * as React from "react";

function SvgIllustrationEasyToImplement(props) {
  return (
    <svg
      width={605}
      height={444}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <filter
          x="-24.2%"
          y="-37.9%"
          width="159.6%"
          height="193.3%"
          filterUnits="objectBoundingBox"
          id="illustration-easy-to-implement_svg__a"
        >
          <feOffset
            dx={25}
            dy={25}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={40}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.300726617 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect
          id="illustration-easy-to-implement_svg__b"
          x={0}
          y={0}
          width={445}
          height={284}
          rx={8}
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(55 55)">
          <use
            fill="#000"
            filter="url(#illustration-easy-to-implement_svg__a)"
            xlinkHref="#illustration-easy-to-implement_svg__b"
          />
          <use
            fill="#1B262F"
            xlinkHref="#illustration-easy-to-implement_svg__b"
          />
        </g>
        <path d="M63 55h429a8 8 0 018 8v32H55V63a8 8 0 018-8z" fill="#2E3F4D" />
        <g transform="translate(71 67)">
          <circle fill="#BA4270" cx={8} cy={8} r={8} />
          <circle fill="#527695" cx={30.4} cy={8} r={8} />
          <circle fill="#36536B" cx={52.8} cy={8} r={8} />
        </g>
        <text
          fontFamily="RobotoMono-Regular, Roboto Mono"
          fontSize={13}
          fill="#FBFCFE"
          transform="translate(55 55)"
        >
          <tspan x={32} y={86}>
            {
              "&lt;form id=&quot;form-id&quot; method=&quot;GET&quot;&gt; &lt;/form&gt;"
            }
          </tspan>
          <tspan x={32} y={106}>
            {"&lt;script"}
          </tspan>
          <tspan x={32} y={126}>
            {" src=&quot;https://loremipsum.com/api.js&quot;"}
          </tspan>
          <tspan x={32} y={146}>
            {" data-client-name=&quot;Your Company&apos;s Name&quot;"}
          </tspan>
          <tspan x={32} y={166}>
            {" data-form-id=&quot;form-id&quot;"}
          </tspan>
          <tspan x={32} y={186}>
            {" data-key=&quot;test_key&quot;"}
          </tspan>
          <tspan x={32} y={206}>
            {" data-product=&quot;transactions&quot;"}
          </tspan>
          <tspan x={32} y={226}>
            {" data-env=&quot;sandbox&quot;&gt;"}
          </tspan>
          <tspan x={32} y={246}>
            {"&lt;/script&gt;"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgIllustrationEasyToImplement;
