import React from "react";

interface BarIconProps {
  className?: string;
}

export default function BarIcon({ className }: BarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9364 5.03564C15.6128 5.03564 15.3505 4.77333 15.3505 4.44971C15.3505 4.12613 15.6128 3.86377 15.9364 3.86377H23.1641C23.4878 3.86377 23.7501 4.12613 23.7501 4.44971V11.9108C23.7501 12.2344 23.4878 12.4967 23.1641 12.4967C22.8405 12.4967 22.5782 12.2344 22.5782 11.9108V5.86421L12.3285 16.1139C12.0997 16.3427 11.7287 16.3427 11.4999 16.1139L8.3003 12.9143L1.0785 20.1361L0.249939 19.3076L7.88602 11.6716C8.11481 11.4428 8.48578 11.4428 8.71458 11.6716L11.9142 14.8711L21.7496 5.03564H15.9364Z"
        fill="#009D77"
      />
    </svg>
  );
}
