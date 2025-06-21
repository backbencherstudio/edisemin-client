import CapIcon from "@/public/icons/cap-icon";
import React from "react";

interface IProps {
  title: string;
  subTitle: string;
}

export default function ReusableBanner({ title, subTitle }: IProps) {
  return (
    <div className="container flex flex-col justify-center items-center bg-[#F3E8FF33] rounded-xl border border-[#F3E8FF33] shadow-sm">
      <div className="bg-[#F3E8FF] p-2 rounded-2xl mt-10">
        <CapIcon className="w-10 h-10" />
      </div>
      <h2 className="font-semibold text-xl md:text-[28px] leading-[126%] text-[#070707] my-4 ">
        {title}
      </h2>
      <p className="text-[#4A4C56] md:text-lg leading-[160%] max-w-3xl text-center mb-10">
        {subTitle}
      </p>
    </div>
  );
}
