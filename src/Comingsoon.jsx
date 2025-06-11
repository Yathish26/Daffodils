import React from "react"; // useState and useEffect are no longer needed for countdown
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react"; // Import MessageSquare for the WhatsApp button

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col items-center justify-start overflow-hidden">
      {/* Header section */}
      <header className="w-full max-w-7xl px-8 py-6 flex justify-between items-center z-10">
        {/* Logo section */}
        <div className="flex items-center space-x-3">
          <img className="w-28 h-28 object-contain" src="/logonew.png" alt="Daffodils" />
        </div>
        {/* Contact mobile number */}
        <a href="tel:+917975414006" className="text-white hover:underline">Contact Us</a>
      </header>

      {/* Main content section */}
      <main className="flex-1 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center p-8 text-center md:text-left z-10">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
          {/* Left section: Coming Soon text and WhatsApp button */}
          <motion.div
            className="flex flex-col items-center md:items-start md:mr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-semibold mb-4 leading-tight">
              We Are <br /> Coming Soon
            </h1>

            {/* WhatsApp button to directly contact via WhatsApp */}
            <a
              href="https://wa.me/917975414006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition duration-300 mt-8"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageSquare size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right section: Description text */}
          <motion.div
            className="max-w-md text-white text-lg md:text-xl leading-relaxed mt-12 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're Industrial Raw Material Suppliers, We are leaders in Mining, Infrastructure and Advertising.
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;
