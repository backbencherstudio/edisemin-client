import InstagramIcon from "@/public/icons/instagram-icon";
import LocationIcon from "@/public/icons/location-icon";
import MessageIcon from "@/public/icons/message-icon";
import PhoneIcon from "@/public/icons/phone-icon";
import TwitterIcon from "@/public/icons/twitter-icon";
import YoutubeIcon from "@/public/icons/youtube-icon";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              {/* Your Logo Icon */}
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={140}
              />
            </div>
            <p className="text-[#4A4C56] text-sm">
              Explore degrees and career paths based on your GCSE and A-Level
              subjects designed to help UK students make informed decisions.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
              <InstagramIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
              <TwitterIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
              <YoutubeIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-2">
            <h3 className="font-cabinet text-2xl text-[#070707] font-bold">
              About Us
            </h3>
            <ul className="space-y-2 text-base ">
              <li>
                <a href="#" className="text-[#4A4C56] hover:text-purple-700">
                  Home 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Home 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Home 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-700">
                  Home 1
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-cabinet text-2xl text-[#070707] font-bold">
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
                  Our Services
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
            <h3 className="font-cabinet text-2xl text-[#070707] font-bold">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <LocationIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
                <span className="text-[#4A4C56] ">
                  3380 Main Street, Stratford, CT 06614
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
                <span className="text-gray-600">(475) 422-2873</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageIcon className="w-8 h-8 text-white cursor-pointer bg-[#5B46FF] rounded-full p-2" />
                <span className="text-gray-600">Careerar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            © 2025 Career PLC. All rights reserved.
          </span>
          <div className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-700 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-700 text-sm">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
