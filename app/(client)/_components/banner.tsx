"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuMoveUpRight } from "react-icons/lu";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch suggestions from the API
  const fetchSuggestions = async (query: string) => {
    if (query.length === 0) {
      setFilteredSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://inn-powerseller-fares-renew.trycloudflare.com/api/calculate/suggest?q=${query}`
      );
      const data = await response.json();
      console.log("Suggestions result:", data);
      setFilteredSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setFilteredSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch the data for a clicked suggestion
  const fetchDataByQuery = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://inn-powerseller-fares-renew.trycloudflare.com/api/calculate/search?q=${query}`
      );
      const data = await response.json();
      console.log("Data for query:", query, data);

      // Create a unique ID for this search
      const searchId = Date.now().toString();

      // Store the data in localStorage
      localStorage.setItem(
        `search_${searchId}`,
        JSON.stringify({
          query: query,
          result: data,
        })
      );

      // Navigate to the search results page
      router.push(`/search-results/${searchId}`);
    } catch (error) {
      console.error("Error fetching data for query:", query, error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change and fetch suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  // Handle click on a suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]);
    fetchDataByQuery(suggestion);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchDataByQuery(searchTerm.trim());
    }
  };

  return (
    <div className="py-40 my-20">
      <div className="relative w-full text-center container mx-auto">
        {/* Decorative Images */}
        <div className="absolute -mt-36 left-4 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-1.png"
            alt="student 1"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -mt-40 right-8 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-2.png"
            alt="student 2"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -bottom-20 md:-bottom-10 left-10 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-3.png"
            alt="student 3"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -bottom-20 md:-bottom-10 right-10 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-4.png"
            alt="student 4"
            className="rounded-full shadow-lg"
            fill
          />
        </div>

        {/* Heading */}
        <h1 className="font-cabinet text-3xl sm:text-4xl md:text-[90px] font-bold leading-[130%] text-[#070707]">
          Unlock Your Future <br />
          with <span className="text-[#6C63FF]">Career Calculator</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 mx-auto text-gray-600 text-sm md:text-xl leading-[150%] mb-10">
          Explore degrees and career paths based on your GCSE and A-Level
          subjects, <br /> designed to help UK students make informed decisions.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="/subject-selection"
            className="rounded-full px-6 text-[#6C63FF] hover:text-white duration-300 ease-linear border border-[#6C63FF] hover:bg-[#5749d6] transition cursor-pointer py-2 flex items-center gap-2"
          >
            Choose Degree
            <LuMoveUpRight className="w-6 h-6 bg-white rounded-full p-1 text-[#5B46FF] hover:bg-[#4736C2] transition-all duration-200 hover:shadow-md border border-[#6C63FF]" />
          </Link>
          <Link
            href="/subject-selection"
            className="rounded-full px-6 text-[#6C63FF] hover:text-white duration-300 ease-linear border border-[#6C63FF] hover:bg-[#5749d6] transition cursor-pointer py-2"
          >
            Calculate Matches
          </Link>
        </div>

        {/* Search Box */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-md md:text-lg font-semibold text-gray-800 mb-2">
            Already know your dream career?
          </p>
          <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by career (e.g., Software Engineer) or degree (e.g., Computer Science)"
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full px-6 py-3 pl-12 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder:text-sm text-xl font-medium"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6C63FF] w-8 h-8 bg-white p-2 rounded-full" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#6C63FF] text-white px-4 py-1 rounded-full text-sm hover:bg-[#5749d6] transition-colors"
            >
              Search
            </button>
          </form>

          {/* Suggestions Dropdown */}
          {searchTerm.length > 0 &&
            filteredSuggestions.length > 0 &&
            !isLoading && (
              <div className="mt-2 bg-white border rounded-md shadow-lg mx-2 md:mx-0 w-full md:max-w-xl p-4 text-start max-h-[30vh] overflow-y-auto absolute z-10 top-full left-0 sm:left-1/4 md:left-[15%] lg:left-[28%]">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="text-sm font-semibold text-[#6C63FF] py-2 cursor-pointer hover:bg-[#f0f0f0] rounded-md transition-all duration-300"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <p>{suggestion}</p>
                    <p className="text-xs text-gray-600">
                      Click to see detailed requirements and career paths
                    </p>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
