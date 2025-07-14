"use client";

import React, { useState, useEffect } from "react";
import ReusableHeading from "@/app/_components/reusable-heading";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Career {
  title: string;
  description: string;
}

interface CareerPath {
  category: string;
  matching_career_paths: Career[];
}

interface ApiResponse {
  input: {
    gcse: Record<string, string>;
    alevel: Record<string, string>;
  };
  result: {
    results: CareerPath[];
  };
}

export default function SubjectSelectionDynamic() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  // console.log();

  useEffect(() => {
    try {
      const calculationId = params.id as string;
      const storedData = localStorage.getItem(`calculation_${calculationId}`);
      // console.log("Stored data:", storedData);

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Loaded calculation data:", parsedData);
        setData(parsedData);
      }
    } catch (error) {
      console.error("Error loading calculation data:", error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container px-4 py-16 space-y-8">
        <ReusableHeading
          title="Career Path"
          title2="Calculator"
          description="Loading your results..."
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container px-4 py-16 space-y-8">
        <ReusableHeading
          title="Career Path"
          title2="Calculator"
          description="No data available. Please try again."
        />
        <Link href="/subject-selection">
          <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline cursor-pointer">
            ◀ Back to Subject Selection
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container px-4 py-16 space-y-8">
      <ReusableHeading
        title="Career Path"
        title2="Calculator"
        description="Based on your subject selection"
      />

      <div>
        <h3 className="text-2xl font-semibold text-[#070707] mb-2">
          Results <br />
          <span className="text-xl font-normal text-[#4A4C56]">
            Based on your subject selection
          </span>
        </h3>
        <p className="text-2xl font-semibold leading-[126%] text-[#16A355]">
          Degree Choices
        </p>

        <div className="bg-[#FBFBFB] p-6 rounded-lg shadow border mt-5">
          <div className="mt-4">
            <p className="font-medium text-md text-gray-800 mb-[10px]">
              GCSE Requirements
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.input.gcse).map(([subject, grade], idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full border border-green-300"
                >
                  {subject} ({grade})
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="font-medium text-md text-gray-800 mb-[10px]">
              A-Level Requirements
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.input.alevel).map(
                ([subject, grade], idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full border border-purple-300"
                  >
                    {subject} ({grade})
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
              Potential career paths:
            </h4>
            <div className="space-y-3">
              {data?.result?.results?.map(
                (careerPath: CareerPath, index: number) => {
                  const isExpanded = expandedCategory === careerPath.category;
                  return (
                    <div
                      key={index}
                      className="w-full border border-gray-300 bg-white rounded-lg"
                    >
                      <div
                        className="px-4 py-3 flex justify-between items-center cursor-pointer hover:shadow"
                        onClick={() =>
                          setExpandedCategory(
                            isExpanded ? null : careerPath.category
                          )
                        }
                      >
                        <span className="font-medium text-[#070707]">
                          {careerPath.category}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                      {isExpanded && (
                        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {careerPath.matching_career_paths.map(
                            (career: Career, idx: number) => (
                              <div
                                key={idx}
                                className="bg-[#F9F9FF] border border-[#D9E0F3] rounded-md p-4"
                              >
                                <p className="text-[#5B46FF] font-semibold text-sm mb-1">
                                  {career.title}
                                </p>
                                <p className="text-[#777980] text-sm leading-relaxed">
                                  {career.description}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-8">
              <Link href="/subject-selection">
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline cursor-pointer">
                  ◀ Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
