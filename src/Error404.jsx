import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-blue-900 text-white font-inter">
            {/* Header */}
            <header className="w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center z-10">
                <div className="flex items-center space-x-3">
                    <img className="w-28 h-28 object-contain" src="/logonew.png" alt="Daffodils" />
                </div>
                <a href="tel:+917975414006" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition">Contact Us</a>
            </header>

            {/* 404 Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                <h1 className="text-7xl font-bold mb-2 text-blue-400 drop-shadow-lg">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-300 mb-8 text-center max-w-md">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-md transition duration-200"
                >
                    Go Home
                </Link>
            </main>

            {/* Footer */}
            <footer className="w-full bg-black/50 py-8 mt-auto">
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

export default Error404;
