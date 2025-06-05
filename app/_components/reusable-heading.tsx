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
    <div className="text-center my-12 sm:my-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[126%]">
        {title} <span className="text-[#5B46FF]">{title2}</span>
      </h2>
      <p className="text-[#4A4C56] text-base sm:text-lg md:text-xl leading-[150%] mt-4 sm:mt-6 max-w-full sm:max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
