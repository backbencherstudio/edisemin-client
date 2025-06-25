"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MessageIcon from "@/public/icons/message-icon";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  issue: string;
}

export default function Contact() {
  // Initialize the React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  // Function to handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send the form data to the API
      const response = await fetch(
        "https://inn-powerseller-fares-renew.trycloudflare.com/api/support/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("result", result);
      console.log("Form submitted successfully:", result);

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 space-y-12">
      <h1 className="font-cabinet text-3xl sm:text-5xl font-bold text-center text-[#070707] mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Send Us a Message */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#070707] mb-4">
            Send us a message
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We will send you the latest company and industry news
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-800 mb-2">Name</label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Type Your Name"
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-2">Email</label>
              <Input
                {...register("email", { required: "Email is required" })}
                placeholder="Type Your Email"
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-2">Phone</label>
              <Input
                {...register("phone", { required: "Phone is required" })}
                placeholder="Type Your Phone"
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Message
              </label>
              <Textarea
                {...register("issue", { required: "Message is required" })}
                placeholder="Type Your Message"
                rows={4}
                className="w-full"
                disabled={isSubmitting}
              />
              {errors.issue && (
                <p className="text-red-500 text-xs">{errors.issue.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-[#6C63FF] text-white hover:bg-[#5749d6] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Get in Touch */}
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#070707] mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Reach out to us through any of these channels
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">
                  <MessageIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                </span>
                <a
                  href="mailto:edisemin88@gmail.com"
                  className="text-gray-800 hover:underline"
                >
                  edisemin88@gmail.com
                </a>
              </div>

              {/* <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">
                  <PhoneIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                </span>
                <span className="text-gray-800">(475) 422-2873</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#6C63FF]">
                  <LocationIcon className="w-8 h-8 text-white bg-[#5B46FF] rounded-full p-2" />
                </span>
                <span className="text-gray-800">
                  3380 Main Street, Stratford, CT 06614
                </span>
              </div> */}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#070707] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#070707]">
                  How accurate are the career matches?
                </h3>
                <p className="text-[#4A4C56] text-sm sm:text-base">
                  The career matches provided by this tool are based on typical
                  subject requirements and progression routes that are widely
                  recognised by UK universities and career services. While the
                  data is compiled from various institutions and sources,
                  subject requirements for degrees and associated career paths
                  are generally consistent across the UK. That said, individual
                  universities and employers may have their own criteria, so we
                  always recommend double-checking with official sources for the
                  most up-to-date information.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#070707]">
                  Can I save my subject selections?
                </h3>
                <p className="text-[#4A4C56] text-sm sm:text-base">
                  Currently, your selections are session-based, meaning they’ll
                  reset if you refresh the page or close your browser. <br />
                  However, we’re exploring the option to introduce user accounts
                  in the future, which would allow you to save your subject
                  choices and career preferences for easier access later on.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#070707]">
                  Is this tool free to use?
                </h3>
                <p className="text-[#4A4C56] text-sm sm:text-base">
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
