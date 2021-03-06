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
              '<form id="form-id" method="GET"> </form>'
            }
          </tspan>
          <tspan x={32} y={106}>
            {"<script"}
          </tspan>
          <tspan x={32} y={126}>
            {' src="https://loremipsum.com/api.js"'}
          </tspan>
          <tspan x={32} y={146}>
            {' data-client-name="Your Company\'s Name"'}
          </tspan>
          <tspan x={32} y={166}>
            {' data-form-id="form-id"'}
          </tspan>
          <tspan x={32} y={186}>
            {' data-key="test_key"'}
          </tspan>
          <tspan x={32} y={206}>
            {' data-product="transactions"'}
          </tspan>
          <tspan x={32} y={226}>
            {' data-env="sandbox"'}
          </tspan>
          <tspan x={32} y={246}>
            {"</script>"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgIllustrationEasyToImplement;
