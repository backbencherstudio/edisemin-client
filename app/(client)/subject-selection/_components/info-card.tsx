// components/InfoCard.tsx
import React from "react";
import AlertIcon from "@/public/icons/alart-icon"; // assuming SVG handles different stroke colors

interface InfoCardProps {
  title?: string;
  items: string[];
  type?: "info" | "warning" | "important" | "success";
}

const styles = {
  info: {
    bg: "bg-[#F6F6F6] border-[#D0D0D0]",
    icon: "text-[#6C6C6C]",
    text: "text-[#333333]",
  },
  warning: {
    bg: "bg-[#FFFFFF] border-[#D0D0D0]",
    icon: "text-[#6C6C6C]",
    text: "text-[#333333]",
  },
  important: {
    bg: "bg-[#FFF3E8] border-[#F4C786]",
    icon: "text-[#DC7A00]",
    text: "text-[#DC7A00] font-medium",
  },
  success: {
    bg: "bg-[#E5FAF5] border-[#8ED9C2]",
    icon: "text-[#009D77]",
    text: "text-[#009D77] font-medium",
  },
};

const InfoCard: React.FC<InfoCardProps> = ({ title, items, type = "info" }) => {
  const { bg, icon, text } = styles[type];

  return (
    <div className={`border rounded-md p-4 ${bg} space-y-2`}>
      <div className="flex items-start gap-2">
        <AlertIcon className={`w-5 h-5 mt-0.5 shrink-0 ${icon}`} />
        <div>
          {title && (
            <p className={`font-semibold text-sm mb-1 ${text}`}>{title}</p>
          )}
          <ul
            className={`list-disc list-inside space-y-1 text-sm leading-relaxed ${text}`}
          >
            {items.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
