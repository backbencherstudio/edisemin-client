import React from "react";

export default function UnderLineIcon({ className }: { className?: string }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="4"
        viewBox="0 0 156 4"
        fill="none"
        className={className}
      >
        <path
          d="M2.5 2L153.5 2.00001"
          stroke="url(#paint0_linear_3424_107)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3424_107"
            x1="2.5"
            y1="4.5"
            x2="153.5"
            y2="4.50001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5B46FF" />
            <stop offset="1" stop-color="#5B46FF" stop-opacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
