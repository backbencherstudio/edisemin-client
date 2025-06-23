import InstagramIcon from "@/public/icons/instagram-icon";
import LocationIcon from "@/public/icons/location-icon";
import MessageIcon from "@/public/icons/message-icon";
import PhoneIcon from "@/public/icons/phone-icon";
import TwitterIcon from "@/public/icons/twitter-icon";
import YoutubeIcon from "@/public/icons/youtube-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="w-auto h-auto"
            />
            <p className="text-[#4A4C56] text-sm sm:text-base">
              Explore degrees and career paths based on your GCSE and A-Level
              subjects, designed to help UK students make informed decisions.
            </p>
            <div className="flex space-x-3">
              <FaFacebook className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2 cursor-pointer" />
              <InstagramIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2 cursor-pointer" />
              <TwitterIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2 cursor-pointer" />
              <YoutubeIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2 cursor-pointer" />
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-2">
            <h3 className="font-cabinet text-xl sm:text-2xl font-bold text-[#070707]">
              About Us
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Our Mission
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-cabinet text-xl sm:text-2xl font-bold text-[#070707]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-2">
            <h3 className="font-cabinet text-xl sm:text-2xl font-bold text-[#070707]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <LocationIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                <span className="text-[#4A4C56] text-sm sm:text-base">
                  3380 Main Street, Stratford, CT 06614
                </span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                <span className="text-gray-600 text-sm sm:text-base">
                  (475) 422-2873
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MessageIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                <span className="text-gray-600 text-sm sm:text-base">
                  Careerar@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 text-sm text-center sm:text-left">
            © 2025 Career PLC. All rights reserved.
          </span>
          <div className="space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-purple-700">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-700">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
