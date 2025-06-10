import React from "react";
import { motion } from "framer-motion";
import { Wrench, Hammer, MessageSquare } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#fef9c3] flex flex-col relative overflow-hidden">
      {/* Top caution stripe with repeating black and yellow pattern */}

      {/* Header section with brand name and tagline */}
      <div className="w-full px-6 py-4 flex items-center bg-white shadow-md z-20">
        {/* Brand name with a Lucide Wrench icon */}
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-700 flex items-center gap-2">
          <Wrench size={24} /> Daffodilsgroup
        </h1>
      </div>

      {/* Main content section, responsive layout for text and image */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 relative z-10">
        <motion.div
          className="md:ml-12 mt-8 md:mt-0 flex-shrink-0"
          initial={{ opacity: 0, x: 30 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation target state
          transition={{ duration: 0.7, delay: 0.2 }} // Animation duration and delay
        >
          <img
            src="/jcb.png"
            alt="Under Construction Illustration"
            draggable="false"
            className="w-64 h-64  md:w-80 md:h-80 lg:w-96 lg:h-96 animate-bounce-slow object-contain"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -30 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Animation target state
          transition={{ duration: 0.7 }} // Animation duration
        >
          {/* Main "Coming Soon" heading with a Lucide Hammer icon */}
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-4 flex items-center justify-center md:justify-start gap-2">
            <Hammer size={36} /> Coming Soon
          </h2>
          {/* Descriptive text about the website's status */}
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Our site is under construction something great is on the way!
          </p>

          {/* Contact phone number */}
          <div className="mb-4 text-lg text-gray-700 font-medium flex items-center justify-center md:justify-start gap-2">
            <MessageSquare size={20} /> Contact us: <span className="text-yellow-800 font-semibold">+91 79 7541 4006</span>
          </div>

          {/* WhatsApp button to directly contact via WhatsApp */}
          <a
            href="https://wa.me/917975414006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition duration-300"
            aria-label="Chat with us on WhatsApp"
          >
            {/* Using MessageSquare for WhatsApp icon as a generic message icon */}
            <MessageSquare size={20} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Footer section with copyright information */}
      <footer className="w-full text-center p-4 bg-gray-800 text-gray-300 text-sm z-20">
        © {new Date().getFullYear()} Daffodils Group. All rights reserved.
      </footer>

      {/* Background elements for visual appeal */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-100 opacity-50 z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-50 rounded-full blur-3xl z-0" />
    </div>
  );
};

export default ComingSoon;
