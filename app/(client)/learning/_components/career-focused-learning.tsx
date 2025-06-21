import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Course {
  title: string;
  platform: string;
  url: string;
}

const CareerFocusedLearning: React.FC = () => {
  const courses: Course[] = [
    {
      title: "Introduction to Coding (for teens)",
      platform: "Udemy",
      url: "#"
    },
    {
      title: "How to Write a CV",
      platform: "Coursera",
      url: "#"
    },
    {
      title: "Photography for Beginners",
      platform: "Skillshare",
      url: "#"
    }
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <Card className="border bg-[#F8F9FA]">
        <CardContent className="p-4 sm:p-6">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl md:text-[24px] font-semibold text-[#070707] mb-2 leading-[150%]">
              Bonus: Career-Focused Learning
            </h2>
            <p className="text-sm sm:text-base text-[#4A4C56] leading-[160%]">
              Want to go beyond exams? These courses help students explore careers early:
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {courses.map((course, courseIndex) => (
              <div key={courseIndex} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#5B46FF] transition-colors">
                <Link
                  href={course.url}
                  className="flex items-start gap-2 text-[#5B46FF] hover:text-[#5a538d] group"
                >
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-medium leading-[150%] mb-1">
                      {course.title} — {course.platform}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 group-hover:opacity-100" />
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerFocusedLearning;