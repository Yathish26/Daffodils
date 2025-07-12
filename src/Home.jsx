import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, HardHat, Truck, Globe, Factory, Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const imagesLinks = [
    "https://i.ibb.co/CsN535VS/Whats-App-Image-2025-06-12-at-2-06-22-PM.jpg",
    "https://i.ibb.co/Z6K1bXSP/Whats-App-Image-2025-06-12-at-2-06-21-PM-1.jpg",
    "https://i.ibb.co/PzGW3wz0/Whats-App-Image-2025-06-12-at-2-06-21-PM.jpg",
    "https://i.ibb.co/Lzr05yfY/25-FE194-F-070-D-4-DD4-B710-3-D0-AA9-CF3471.jpg",
  ];

  const features = [
    {
      icon: <HardHat size={40} className="text-blue-500" />,
      title: "Expert Mining",
      description: "Decades of experience in bauxite extraction with sustainable practices"
    },
    {
      icon: <Truck size={40} className="text-blue-500" />,
      title: "Efficient Logistics",
      description: "Streamlined supply chain for timely delivery of raw materials"
    },
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "Global Reach",
      description: "Supplying quality bauxite to industries worldwide"
    },
    {
      icon: <Factory size={40} className="text-blue-500" />,
      title: "Industrial Grade",
      description: "High-quality bauxite meeting international standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white font-inter overflow-hidden">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center z-10">
        <div className="flex items-center space-x-3">
          <img className="w-28 h-28 object-contain" src="/logonew.png" alt="Daffodils" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-blue-300 transition">About</a>
          <a href="#operations" className="text-white hover:text-blue-300 transition">Operations</a>
          <a href="#gallery" className="text-white hover:text-blue-300 transition">Gallery</a>
          <a href="#contact" className="text-white hover:text-blue-300 transition">Contact</a>
        </nav>
        <a href="tel:+917975414006" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition">Contact Us</a>
      </header>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Leading <span className="text-blue-400">Bauxite Mining</span> & Supply Experts
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Delivering high-quality bauxite to industries worldwide with sustainable mining practices and reliable logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/917975414006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium shadow-md transition duration-300"
            >
              <MessageSquare size={20} /> WhatsApp Inquiry
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
  className="w-full md:w-1/2 px-4" // full width on mobile, half on desktop
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
    className="rounded-xl overflow-hidden shadow-xl"
  >
    {imagesLinks.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200">
          <img
            src={img}
            alt={`Mining Operation ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</motion.div>

      </section>

      {/* Features Section */}
      <section id="about" className="w-full max-w-7xl mx-auto px-8 py-16 bg-blue-900/50 rounded-xl my-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full mb-4">
              <Award size={20} /> <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mining Excellence</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We combine decades of experience with modern technology to deliver superior bauxite while maintaining environmental responsibility.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 p-6 rounded-xl border border-blue-900/50 hover:border-blue-500 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="w-full max-w-7xl mx-auto px-8 py-16 my-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Mining Operations</h2>
            <p className="text-gray-300 mb-6">
              Our bauxite mining operations utilize state-of-the-art technology while prioritizing environmental conservation and community development.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Advanced geological surveying for optimal extraction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Eco-friendly mining techniques minimizing land impact</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Rigorous quality control at every production stage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Comprehensive rehabilitation of mined areas</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
              <img
                src={imagesLinks[1]}
                alt="Mining Operation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full max-w-7xl mx-auto px-8 py-16 my-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mining Operations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our bauxite mining sites and see our operations in action.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="w-full h-fit"
        >
          {imagesLinks.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-xl h-64">
                <img
                  src={img}
                  alt={`Mining Operation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    Operation {index + 1}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto px-8 py-16 my-12 bg-blue-900/30 rounded-xl">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              Interested in our bauxite products or want to learn more about our mining operations? Contact us today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <MessageSquare size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <a href="https://wa.me/917975414006" className="text-gray-300 hover:text-white transition">+91 7975414006</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:info@daffodils.com" className="text-gray-300 hover:text-white transition">info@daffodils.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+917975414006" className="text-gray-300 hover:text-white transition">+91 7975414006</a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-black/30 border border-blue-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-black/30 border border-blue-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-black/30 border border-blue-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your inquiry about bauxite..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img className="w-16 h-16 object-contain" src="/logonew.png" alt="Daffodils" />
            <span className="text-xl font-semibold">Daffodils</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Daffodils Bauxite Mining. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;