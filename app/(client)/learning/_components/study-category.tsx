import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import PenIcon from "@/public/icons/pen-icon";
import BagIcon from "@/public/icons/bag-icon";
import LaptopIcon from "@/public/icons/laptop-icon";
import BookIcon from "@/public/icons/book-icon";
import CalenderIcon from "@/public/icons/calender-icon";
import Link from "next/link";

interface CategoryItem {
  id: number;
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  items: {
    category: string;
    items: string[];
  }[];
  recommendations: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  };
}

const StudyCategories: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      icon: PenIcon,
      title: "Essential Stationery",
      description:
        "No matter what studying buying is strong stationery made is key.",
      backgroundColor: "bg-[#F3E8FF]",
      borderColor: "border-purple-200",
      items: [
        {
          category: "Must-haves:",
          items: [
            "Pens (blue/black + coloured for notes)",
            "Highlighters",
            "Pencils & sharpeners",
            "Erasers",
            "Rulers",
            "Notebooks or refill pads",
          ],
        },
      ],
      recommendations: {
        title: "Recommended:",
        links: [
          { text: "Some kind of affiliate link", url: "#" },
          { text: "Some kind of affiliate link", url: "#" },
        ],
      },
    },
    {
      id: 2,
      icon: BagIcon,
      title: "Backpacks & Pencil Cases",
      description:
        "Oganisation starts with a good bag. Look for something durable with compartments for books, folders, and tech.",
      backgroundColor: "bg-[#CCFBF1]",
      borderColor: "border-teal-200",
      items: [
        {
          category: "Top Picks:",
          items: [
            "Waterproof backpacks with padded straps",
            "Clear pencil cases (required for exams)",
          ],
        },
      ],
      recommendations: {
        title: "Recommended:",
        links: [
          { text: "Some kind of affiliate link", url: "#" },
          { text: "Some kind of affiliate link", url: "#" },
        ],
      },
    },
    {
      id: 3,
      icon: LaptopIcon,
      title: "Tech Gear for Students",
      description:
        "Some tech tech makes school-life much easier especially Maths and Science.",
      backgroundColor: "bg-[#DBEAFE]",
      borderColor: "border-blue-200",
      items: [
        {
          category: "Essentials:",
          items: [
            "Scientific calculator (e.g. Casio FX-991EX)",
            "USB stick for coursework",
            "Headphones for online learning or revision videos",
          ],
        },
      ],
      recommendations: {
        title: "Recommended:",
        links: [
          { text: "Some kind of affiliate link", url: "#" },
          { text: "Some kind of affiliate link", url: "#" },
        ],
      },
    },
    {
      id: 4,
      icon: BookIcon,
      title: "Subject-Specific Revision Books",
      description:
        "These specialized books can be a huge help supporting your work. We recommend CGP and Oxford as top brands on the market.",
      backgroundColor: "bg-[#DCFCE7]",
      borderColor: "border-green-200",
      items: [
        {
          category: "Top Resources by Subject:",
          items: [
            "GCSE Maths CGP Guide",
            "A-Level Biology CGP Workbook",
            "GCSE English Literature (Romeo & Juliet) - CGP",
          ],
        },
      ],
      recommendations: {
        title: "Recommended:",
        links: [
          { text: "Some kind of affiliate link", url: "#" },
          { text: "Some kind of affiliate link", url: "#" },
        ],
      },
    },
    {
      id: 5,
      icon: CalenderIcon,
      title: "Study Planners & Organisers",
      description: "Time management is a make-or-break skill in school.",
      backgroundColor: "bg-[#FFEDD5]",
      borderColor: "border-orange-200",
      items: [
        {
          category: "Tools to Help:",
          items: [
            "Weekly planners or bullet journals",
            "Wall calendars for deadlines",
            "Sticky notes",
          ],
        },
      ],
      recommendations: {
        title: "Recommended:",
        links: [
          { text: "Some kind of affiliate link", url: "#" },
          { text: "Some kind of affiliate link", url: "#" },
        ],
      },
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
      {categories.map((category) => (
        <Card key={category.id} className="border">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-8">
              {/* Left Content */}
              <div className="flex-1 lg:pr-8 w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                  <div
                    className={`${category.backgroundColor} ${category.borderColor} border-2 p-2 rounded-2xl`}
                  >
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#5B46FF]" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm md:text-[28px] font-semibold text-[#070707] leading-[126%]">
                      {category.id}
                    </span>
                    <h2 className="text-base sm:text-lg md:text-[28px] text-[#070707] font-semibold leading-[126%]">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-lg text-[#4A4C56] mb-4">
                  {category.description}
                </p>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
                  <div className="w-full lg:flex-1">
                    {/* Items */}
                    {category.items.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-3">
                        <h3 className="text-lg sm:text-[24px] font-medium text-[#070707] mb-2 leading-[150%]">
                          {section.category}
                        </h3>

                        <ul className="space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="flex items-center gap-2">
                                <span className="mt-1 text-[#5B46FF] text-2xl sm:text-3xl">
                                  •
                                </span>
                                <span className="text-sm sm:text-lg text-[#4A4C56] leading-[160%]">
                                  {item}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Right Content - Recommendations */}
                  <div className="w-full lg:w-[300px] xl:w-[400px] 2xl:w-[507px] flex-shrink-0">
                    <h3 className="text-lg sm:text-[24px] font-medium text-[#070707] mb-2 leading-[150%]">
                      {category.recommendations.title}
                    </h3>
                    <div className="space-y-2">
                      {category.recommendations.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.url}
                          className="flex items-center gap-2 text-sm sm:text-lg text-[#5B46FF] hover:text-[#5a538d] group border py-3 sm:py-4 px-2 font-medium leading-[160%] rounded-lg"
                        >
                          <span className="flex-1">{link.text}</span>
                          <ExternalLink className="w-4 h-4 sm:w-6 sm:h-6 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudyCategories;
