import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ManIcon from "@/public/icons/man-icon";
import MansIcon from "@/public/icons/mans-icon";
import BooksIcon from "@/public/icons/books-icon";
import LightIcon from "@/public/icons/light-icon";

interface Platform {
  name: string;
  url: string;
  description: string;
}

interface Subject {
  name: string;
  tip: string;
  resource: {
    text: string;
    url: string;
  };
}

interface CategoryItem {
  id: number;
  icon: React.ComponentType<{ className: string }>;
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  platforms?: Platform[];
  subjects?: Subject[];
  sectionTitle: string;
  additionalInfo?: {
    icon: React.ComponentType<{ className: string }>;
    text: string;
  };
}

const OnlineLearningPlatforms: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      icon: ManIcon,
      title: "Online Tutoring Platforms",
      subtitle: "(1:1 Help)",
      description:
        "One-to-one tutoring has direct impact on exam marks, as online platforms connect you with expert tutors across subjects like Maths, English, Sciences, and more.",
      backgroundColor: "bg-[#F3E8FF]",
      borderColor: "border-purple-200",
      sectionTitle: "",
      platforms: [
        {
          name: "MyTutor",
          url: "#",
          description:
            "Trusted I-JK GCSE/A-Leve1 Tutors\n\nUK-based tutors, video lessons, and subject specialists",
        },
        {
          name: "GoStudent",
          url: "#",
          description:
            "Personalised tutoring Plans\n\nOngoing support and flexible scheduling for GCSEs & A-levels",
        },
        {
          name: "Superprof",
          url: "#",
          description:
            "Online and in-Person Tutors\n\nThousands of tutors for every subject and budget",
        },
      ],
      additionalInfo: {
        icon: LightIcon,
        text: "Pro tip: Always ask for a free first session to see if it's a good fit",
      },
    },
    {
      id: 2,
      icon: MansIcon,
      title: "Interactive Online Learning Platforms",
      description:
        "Perfect to learn at your own pace. These platforms offer bite-sized lessons, videos, and quizzes — perfect for independent study.",
      backgroundColor: "bg-[#F3E8FF]",
      borderColor: "border-purple-200",
      sectionTitle: "Best for independent Learners:",
      platforms: [
        {
          name: "Seneca Learning",
          url: "#",
          description:
            "Free GCSE/A-Level Courses\n\nInteractive flashcards and revision tools",
        },
        {
          name: "Skillshare",
          url: "#",
          description:
            "Trusted 1:1 GCSE/A-Level Tutors\n\nFrom essay writing to productivity hacks.",
        },
        {
          name: "Coursera",
          url: "#",
          description:
            "University-level learning\n\nIdeal for students wanting to explore careers or gain extra redit.",
        },
        {
          name: "Udemy",
          url: "#",
          description:
            "Affordable Subject-Specific Courses\n\nFind courses on topics like GCSE Maths, excel, coding, and more",
        },
      ],
    },
    {
      id: 3,
      icon: BooksIcon,
      title: "Subjects Students Commonly Struggle With",
      description:
        "Here are a few subjects where extra support can make a big difference:",
      backgroundColor: "bg-[#F3E8FF]",
      borderColor: "border-purple-200",
      sectionTitle: "Best for independent Learners:",
      subjects: [
        {
          name: "Maths",
          tip: "Focus on past paper practice + 1-1 explanation of weak areas",
          resource: {
            text: "Find a Maths Tutor",
            url: "#",
          },
        },
        {
          name: "English",
          tip: "Improve writing skills with feedback on essays",
          resource: {
            text: "Explore Writing Courses",
            url: "#",
          },
        },
        {
          name: "Sciences",
          tip: "Use visual tools and simulations for concepts like cell biology",
          resource: {
            text: "Try Seneca",
            url: "#",
          },
        },
        {
          name: "Languages",
          tip: "Combine reading, speaking, and listening with a native tutor",
          resource: {
            text: "Get language support",
            url: "#",
          },
        },
      ],
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
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center text-lg sm:text-xl md:text-[28px] font-semibold text-[#070707] leading-[126%]">
                      {category.id}
                    </span>
                    <div>
                      <h2 className="text-base sm:text-lg md:text-[28px] text-[#070707] font-semibold leading-[126%]">
                        {category.title}
                        {category.subtitle && (
                          <span className="ml-2 text-[#5B46FF]">
                            {category.subtitle}
                          </span>
                        )}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-lg text-[#4A4C56] mb-4">
                  {category.description}
                </p>

                {/* Section Title */}
                {category.sectionTitle && (
                  <h3 className="text-lg sm:text-[24px] font-medium text-[#070707] mb-4 leading-[150%]">
                    {category.sectionTitle}
                  </h3>
                )}

                {/* Platforms Grid */}
                {category.platforms && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {category.platforms.map((platform, platformIndex) => (
                      <div
                        key={platformIndex}
                        className="space-y-2 border p-3 sm:p-4 rounded-lg bg-gray-50"
                      >
                        <Link
                          href={platform.url}
                          className="flex items-center gap-2 text-base sm:text-lg font-medium text-[#5B46FF] hover:text-[#5a538d] group"
                        >
                          <span>{platform.name}</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                        <p className="text-xs sm:text-sm text-[#4A4C56] whitespace-pre-line">
                          {platform.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subjects Table */}
                {category.subjects && (
                  <div className="space-y-3 overflow-x-auto">
                    <div className="grid grid-cols-12 gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-[#742EAE] bg-[#F3E8FF] p-2 sm:p-3 rounded-lg min-w-[600px]">
                      <div className="col-span-3 sm:col-span-2">Subject</div>
                      <div className="col-span-6 sm:col-span-7">Tip</div>
                      <div className="col-span-3">Learn More</div>
                    </div>
                    {category.subjects.map((subject, subjectIndex) => (
                      <div
                        key={subjectIndex}
                        className="grid grid-cols-12 gap-2 sm:gap-4 items-center p-2 sm:p-3 border-b border-gray-100 min-w-[600px]"
                      >
                        <div className="col-span-3 sm:col-span-2 text-xs sm:text-sm font-medium text-[#070707]">
                          {subject.name}
                        </div>
                        <div className="col-span-6 sm:col-span-7 text-xs sm:text-sm text-[#4A4C56]">
                          {subject.tip}
                        </div>
                        <div className="col-span-3">
                          <Link
                            href={subject.resource.url}
                            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#5B46FF] hover:text-[#5a538d] group"
                          >
                            <span className="truncate">
                              {subject.resource.text}
                            </span>
                            <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Additional Info */}
                {category.additionalInfo && (
                  <div className="flex items-center gap-2 mt-4 p-2 sm:p-3 bg-[#F0FDF4] rounded-lg border border-green-200">
                    <category.additionalInfo.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#4A4C56]">
                      {category.additionalInfo.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OnlineLearningPlatforms;
