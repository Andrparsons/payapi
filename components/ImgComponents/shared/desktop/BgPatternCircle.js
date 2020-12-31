import * as React from "react";

function SvgBgPatternCircle(props) {
  return (
    <svg
      width={780}
      height={780}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <circle id="bg-pattern-circle_svg__a" cx={390} cy={390} r={390} />
        <circle id="bg-pattern-circle_svg__b" cx={390} cy={390} r={390} />
      </defs>
      <g fill="#36536B" fillRule="evenodd" opacity={0.15}>
        <use xlinkHref="#bg-pattern-circle_svg__a" />
        <use xlinkHref="#bg-pattern-circle_svg__b" />
      </g>
    </svg>
  );
}

export default SvgBgPatternCircle;
