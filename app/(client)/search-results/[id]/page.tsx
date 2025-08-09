"use client";

import React, { useState, useEffect } from "react";
import ReusableHeading from "@/app/_components/reusable-heading";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Interfaces
interface Requirement {
  subject: string;
  grade: string;
  mandatory: boolean;
}

interface CareerPath {
  title: string;
  description: string;
}

interface SearchResult {
  category_name: string;
  gcse_requirements: Requirement[];
  a_level_requirements: Requirement[];
  career_paths: CareerPath[];
}

interface SearchData {
  query: string;
  result: SearchResult[];
}

export default function SearchResults() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [data, setData] = useState<SearchData | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  console.log("data:", data);

  // Load search data
  useEffect(() => {
    try {
      const searchId = params.id as string;
      const storedData = localStorage.getItem(`search_${searchId}`);

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
    } catch (error) {
      console.error("Error loading search data:", error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container px-4 py-16 space-y-8">
        <ReusableHeading
          title="Search"
          title2="Results"
          description="Loading your search results..."
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container px-4 py-16 space-y-8">
        <ReusableHeading
          title="Search"
          title2="Results"
          description="No search results available. Please try again."
        />
        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline cursor-pointer">
            ◀ Back to Home
          </button>
        </Link>
      </div>
    );
  }

  
  const formatSubject = (subject: string) => {
    if (
      subject.startsWith("Any") || // Matches "Any" or "Any of"
      subject.startsWith("Any of:")
    ) {
      // Extract the list of options (after the colon if present)
      const subjectList = subject.split(":")[1]?.trim();
      const subjectArray = subjectList ? subjectList.split(",") : [];
      const length = subjectArray.length;

      return `Any of the following (${length} subjects): ${subjectArray.join(
        ", "
      )}`;
    }
    return subject; 
  };

  return (
    <div className="container px-4 py-16 space-y-8 ">
      <div className="max-w-2xl mx-auto text-center">
        <ReusableHeading
          title="Degree you are looking for"
          title2="Results"
          description={`Results for "${data.query}"`}
        />
      </div>

      <div>
        <p className="text-2xl font-semibold leading-[126%] text-[#16A355]">
          Matching Categories
        </p>

        <div className="bg-[#FBFBFB] p-6 rounded-lg shadow border mt-5">
          <div className="space-y-6">
            {data.result.map((category, index) => {
              const isExpanded = expandedCategory === category.category_name;
              return (
                <div
                  key={index}
                  className="w-full border border-gray-300 bg-white rounded-lg "
                >
                  <div
                    className="px-4 py-3 flex justify-between items-center cursor-pointer hover:shadow"
                    onClick={() =>
                      setExpandedCategory(
                        isExpanded ? null : category.category_name
                      )
                    }
                  >
                    <span className="font-medium text-[#070707] cursor-pointer">
                      {category.category_name}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-6">
                      {/* GCSE Requirements */}
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3">
                          GCSE Requirements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.gcse_requirements.map((req, idx) => (
                            <span
                              key={idx}
                              className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full border border-green-300"
                            >
                              {req.subject} ({req.grade})
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* A-Level Requirements */}
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3">
                          A-Level Requirements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.a_level_requirements.map((req, idx) => (
                            <span
                              key={idx}
                              className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full border border-purple-300"
                            >
                              {formatSubject(req.subject)} ({req.grade})
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Career Paths */}
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3">
                          Career Paths
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {category.career_paths.map((career, idx) => (
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
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link href="/">
              <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline cursor-pointer">
                ◀ Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
