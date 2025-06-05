import React from "react";

export default function ReusableHeading({
  title,
  title2,
  description,
}: {
  title: string;
  title2?: string;
  description: string;
}) {
  return (
    <div className="text-center my-20">
      <h2 className="text-5xl font-semibold leading-[126%]">
        {title} <span className="text-[#5B46FF]">{title2}</span>
      </h2>
      <p className="text-[#4A4C56] text-xl leading-[150%] mt-2 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
