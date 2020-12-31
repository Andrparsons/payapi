import * as React from "react";

function SvgMenu(props) {
  return (
    <svg width={28} height={17} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h28v3H0zm0 7h28v3H0zm0 7h28v3H0z"
        fill="#36536B"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgMenu;
