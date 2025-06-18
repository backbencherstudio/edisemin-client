"use client";

import React, { useState } from "react";
import CalculatorIcon from "@/public/icons/calculator-icon";
import { useRouter } from "next/navigation";

const gcseGrades = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const aLevelGrades = ["A*", "A", "B", "C"];

const gcseSubjects = [
  { name: "English Language", mandatory: true },
  { name: "English Literature", mandatory: true },
  { name: "Mathematics", mandatory: true },
  { name: "Combined Science" },
  { name: "Biology" },
  { name: "Chemistry" },
  { name: "Physics" },
  { name: "Astronomy" },
  { name: "History" },
  { name: "Geography" },
  { name: "Religious Studies" },
  { name: "Ancient History" },
  { name: "Classical Civilisation" },
  { name: "Citizenship Studies" },
  { name: "Sociology" },
  { name: "Psychology" },
  { name: "Business Studies" },
  { name: "Economics" },
  { name: "Computer Science" },
  { name: "Design and Technology" },
  { name: "Electronics" },
  { name: "Engineering" },
  { name: "Food Preparation and Nutrition" },
  { name: "Art" },
  { name: "Dance" },
  { name: "Drama" },
  { name: "Film Studies" },
  { name: "Media Studies" },
  { name: "Music" },
  { name: "Physical Education" },
  { name: "Statistics" },
  { name: "Modern Foreign Languages" },
  { name: "Ancient Languages" },
];

const aLevelSubjects = [
  "Accounting",
  "Arabic",
  "Art and Design",
  "Biology",
  "Business Studies",
  "Chemistry",
  "Chinese",
  "Computer Science",
  "Design-And-Technology",
  "Drama and Theatre",
  "Economics",
  "Electronics",
  "English Language",
  "English Literature",
  "Environmental Science",
  "Film Studies",
  "Food Science",
  "French",
  "Further Mathematics",
  "Geography",
  "Geology",
  "German",
  "Graphic Design",
  "Greek",
  "Hebrew",
  "History",
  "Italian",
  "Latin",
  "Law",
  "Mathematics",
  "Media Studies",
  "Music",
  "Philosophy",
  "Physical Education",
  "Photography",
  "Physics",
  "Polish",
  "Politics",
  "Portuguese",
  "Psychology",
  "Religious Studies",
  "Russian",
  "Social Studies",
  "Sociology",
  "Spanish",
  "Statistics",
];

const requiredALevelsForGCSE = {
  Mathematics: { minGrade: 6, aLevelSubject: "Mathematics" },
  Biology: { minGrade: 6, aLevelSubject: "Biology" },
  Chemistry: { minGrade: 6, aLevelSubject: "Chemistry" },
  Physics: { minGrade: 6, aLevelSubject: "Physics" },
  "Further Mathematics": { minGrade: 8, aLevelSubject: "Further Mathematics" },
};

export default function SubjectSelectionInfo() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gcseSelections, setGcseSelections] = useState<
    Record<string, number | undefined>
  >({});
  const [aLevelSelections, setALevelSelections] = useState<
    Record<string, string | undefined>
  >({});
  const [eligibilityErrors, setEligibilityErrors] = useState<string[]>([]);

  const handleGCSEChange = (
    subject: string,
    isChecked: boolean,
    grade: number | undefined
  ) => {
    setGcseSelections((prev) => ({
      ...prev,
      [subject]: isChecked ? grade : undefined,
    }));
    checkALevelEligibility(subject, isChecked, grade);
  };

  const handleALevelChange = (
    subject: string,
    isChecked: boolean,
    grade: string | undefined
  ) => {
    setALevelSelections((prev) => ({
      ...prev,
      [subject]: isChecked ? grade : undefined,
    }));
  };

  const checkALevelEligibility = (
    subject: string,
    isChecked: boolean,
    grade: number | undefined
  ) => {
    const errors: string[] = [];

    if (isChecked && subject in requiredALevelsForGCSE) {
      const { minGrade, aLevelSubject } =
        requiredALevelsForGCSE[subject as keyof typeof requiredALevelsForGCSE];
      if (grade && grade < minGrade) {
        errors.push(
          `You need at least grade ${minGrade} in GCSE ${subject} to take A-Level ${aLevelSubject}`
        );
      }
    }

    setEligibilityErrors(errors);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setEligibilityErrors([]);

      // Format GCSE data
      const gcseData: Record<string, string> = {};
      Object.entries(gcseSelections).forEach(([subject, grade]) => {
        if (grade !== undefined) {
          // Convert subject names to match API expectations
          const formattedSubject =
            subject === "Mathematics" ? "Maths" : subject;
          gcseData[formattedSubject] = grade.toString();
        }
      });

      // Format A-Level data
      const alevelData: Record<string, string> = {};
      Object.entries(aLevelSelections).forEach(([subject, grade]) => {
        if (grade !== undefined) {
          alevelData[subject] = grade;
        }
      });

      const subjectData = {
        gcse: gcseData,
        alevel: alevelData,
      };

      console.log("Sending data to API:", subjectData);

      // Make API call
      const response = await fetch(
        "https://inn-powerseller-fares-renew.trycloudflare.com/api/calculate/match",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(subjectData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("API Error Response:", errorData);
        throw new Error(errorData?.message || `API Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      // Create a unique ID for this calculation
      const calculationId = Date.now().toString();

      // Store the data in localStorage
      localStorage.setItem(
        `calculation_${calculationId}`,
        JSON.stringify({
          input: subjectData,
          result: result,
        })
      );

      // Navigate to the dynamic page with the calculation ID
      router.push(`/subject-selection/${calculationId}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      setEligibilityErrors([
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again.",
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* GCSE Subjects */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg sm:text-xl text-[#0B0A33] font-bold mb-2">
          GCSE Subjects{" "}
          <span className="text-[#4A4C56] text-sm">
            (min 5 required, max 12 allowed)
          </span>
        </h2>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {gcseSubjects.map((subject, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`gcse-${index}`}
                  checked={gcseSelections[subject.name] !== undefined}
                  onChange={(e) =>
                    handleGCSEChange(
                      subject.name,
                      e.target.checked,
                      e.target.checked ? gcseGrades[0] : undefined
                    )
                  }
                  className="sm:w-4 sm:h-4 w-5 h-5"
                />
                <label
                  htmlFor={`gcse-${index}`}
                  className="text-sm sm:text-base text-[#4A4C56]"
                >
                  {subject.name}
                </label>
                {subject.mandatory && (
                  <span className="text-white text-xs bg-red-500 px-2 py-0.5 rounded-full">
                    Mandatory
                  </span>
                )}
              </div>
              {gcseSelections[subject.name] !== undefined && (
                <select
                  value={gcseSelections[subject.name]}
                  onChange={(e) =>
                    handleGCSEChange(subject.name, true, Number(e.target.value))
                  }
                  className="border rounded px-2 py-1 text-sm sm:text-base"
                >
                  {gcseGrades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* A-Level Subjects */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg sm:text-xl text-[#0B0A33] font-bold mb-2">
          A-Level Subjects{" "}
          <span className="text-gray-500 text-sm">
            (typically 3–4 subjects)
          </span>
        </h2>
        <div className="max-h-96 overflow-y-auto space-y-4">
          {aLevelSubjects.map((subject, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`alevel-${index}`}
                  checked={aLevelSelections[subject] !== undefined}
                  onChange={(e) =>
                    handleALevelChange(
                      subject,
                      e.target.checked,
                      e.target.checked ? aLevelGrades[0] : undefined
                    )
                  }
                  className="sm:w-4 sm:h-4 w-5 h-5"
                />
                <label
                  htmlFor={`alevel-${index}`}
                  className="text-sm sm:text-base text-[#4A4C56]"
                >
                  {subject}
                </label>
              </div>
              {aLevelSelections[subject] !== undefined && (
                <select
                  value={aLevelSelections[subject]}
                  onChange={(e) =>
                    handleALevelChange(subject, true, e.target.value)
                  }
                  className="border rounded px-2 py-1 text-sm sm:text-base"
                >
                  {aLevelGrades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Errors */}
      {eligibilityErrors.length > 0 && (
        <div className="col-span-1 sm:col-span-2 text-red-500 text-sm mt-4">
          <ul>
            {eligibilityErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Button */}
      <div className="col-span-1 sm:col-span-2 flex justify-center mb-12 sm:mb-20">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="mt-6 bg-[#5B46FF] hover:bg-[#4a4ce6] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CalculatorIcon className="w-5 h-5" />
          {isSubmitting ? "Calculating..." : "Calculate Degree Matches"}
        </button>
      </div>
    </div>
  );
}
