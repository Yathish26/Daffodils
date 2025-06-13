import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const ComingSoon = () => {
  const imagesLinks = [
    "https://i.ibb.co/CsN535VS/Whats-App-Image-2025-06-12-at-2-06-22-PM.jpg",
    "https://i.ibb.co/Z6K1bXSP/Whats-App-Image-2025-06-12-at-2-06-21-PM-1.jpg",
    "https://i.ibb.co/PzGW3wz0/Whats-App-Image-2025-06-12-at-2-06-21-PM.jpg",
    "https://i.ibb.co/Lzr05yfY/25-FE194-F-070-D-4-DD4-B710-3-D0-AA9-CF3471.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to bg-blue-900 text-white font-inter flex flex-col items-center justify-start overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-7xl px-8 py-6 flex justify-between items-center z-10">
        <div className="flex items-center space-x-3">
          <img className="w-28 h-28 object-contain" src="/logonew.png" alt="Daffodils" />
        </div>
        <a href="tel:+917975414006" className="text-white hover:underline">Contact Us</a>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center p-8 text-center md:text-left z-10">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center md:items-start md:mr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-semibold mb-4 leading-tight">
              We Are <br /> Coming Soon
            </h1>
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

          {/* Right Section */}
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

      {/* Carousel Section */}
      <section className="w-full max-w-4xl h-fit px-8 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Projects</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full h-fit"
        >
          {imagesLinks.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ComingSoon;
