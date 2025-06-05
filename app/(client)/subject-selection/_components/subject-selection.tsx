"use client";

import CalculatorIcon from "@/public/icons/calculator-icon";
import Link from "next/link";
import React, { useState } from "react";

const gcseGrades = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const aLevelGrades = ["A+", "A", "B", "C"];

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

export default function SubjectSelectionInfo() {
  const [gcseSelections, setGcseSelections] = useState<
    Record<string, number | undefined>
  >({});
  const [aLevelSelections, setALevelSelections] = useState<
    Record<string, string | undefined>
  >({});

  const handleGCSEChange = (
    subject: string,
    isChecked: boolean,
    grade: number | undefined
  ) => {
    setGcseSelections((prev) => ({
      ...prev,
      [subject]: isChecked ? grade : undefined,
    }));
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

  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* GCSE Subjects */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg text-[#0B0A33] font-bold mb-2">
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
                />
                <label
                  htmlFor={`gcse-${index}`}
                  className="text-sm text-[#4A4C56]"
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
                  className="border rounded px-2 py-1 text-sm"
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
        <h2 className="text-lg text-[#0B0A33] font-bold mb-2">
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
                />
                <label htmlFor={`alevel-${index}`} className="text-sm">
                  {subject}
                </label>
              </div>
              {aLevelSelections[subject] !== undefined && (
                <select
                  value={aLevelSelections[subject]}
                  onChange={(e) =>
                    handleALevelChange(subject, true, e.target.value)
                  }
                  className="border rounded px-2 py-1 text-sm"
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

      {/* Button */}
      <div className="col-span-1 md:col-span-2 flex justify-center mb-20">
        <Link href="/subject-selection-dynamic">
          <button className="mt-6 bg-[#5B46FF] hover:bg-[#4a4ce6] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer">
            <CalculatorIcon className="w-5 h-5" />
            Calculate Degree Matches
          </button>
        </Link>
      </div>
    </div>
  );
}
