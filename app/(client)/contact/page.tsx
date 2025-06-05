"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20 space-y-12">
      <h1 className="font-cabinet text-xl md:text-5xl font-bold text-center text-[#070707] mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Send Us a Message */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#070707] mb-4">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-6">
            We will send you the latest company and industry news
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-800 mb-2">Name</label>
              <Input placeholder="Type Your Name" />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">Email</label>
              <Input placeholder="Type Your Email" />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">Phone</label>
              <Input placeholder="Type Your Phone" />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Message
              </label>
              <Textarea placeholder="Type Your Message" rows={4} />
            </div>
            <Button className="w-full mt-4 bg-[#6C63FF] text-white hover:bg-[#5749d6] cursor-pointer">
              Send Message
            </Button>
          </form>
        </div>

        {/* Get in Touch */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg border ">
            <h2 className="text-xl font-semibold text-[#070707] mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out to us through any of these channels
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">📧</span>
                <span className="text-gray-800">Career@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">📞</span>
                <span className="text-gray-800">(475) 422-2873</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">📍</span>
                <span className="text-gray-800">
                  3380 Main Street, Stratford, CT 06614
                </span>
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="bg-white p-8 rounded-lg border">
            <h2 className="text-xl font-semibold text-[#070707] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#070707]">
                  How accurate are the career matches?
                </h3>
                <p className="text-[#4A4C56] text-sm ">
                  Complete lists of GCSE and A-Level subjects with detailed
                  requirements.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#070707]">
                  Can I save my subject selections?
                </h3>
                <p className="text-[#4A4C56] text-sm ">
                  Currently, selections are session-based. We&apos;re working on
                  user accounts for saving preferences.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#070707]">
                  Is this tool free to use?
                </h3>
                <p className="text-[#4A4C56] text-sm ">
                  Yes, our career calculator is completely free for all
                  students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
