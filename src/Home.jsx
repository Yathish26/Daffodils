import React, { useState, useEffect } from 'react';

export default function Home() {
    const backgroundImages = [
        'https://www.floraly.com.au/cdn/shop/articles/daffodils_blog_hero.png?v=1663224190',
        'https://www.rhs.org.uk/getmedia/0f205892-5d07-4a09-8041-16a74510f5ce/daffodils-desktop-hero-1920x978.jpg',
        'https://t6c9u7h6.delivery.rocketcdn.me/wp-content/uploads/2023/04/Daffodils-wordsworth.jpg',
        'https://leeucollection.com/images/uploads/blog/5e7c88dbe1dac-01-Glencoyne-Ullswater-Wordsworth-daffodils-15.jpg',
        'https://www.coppermines.co.uk/wp-content/uploads/2025/03/iStock-1496437422.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [backgroundImages.length]); // Re-run effect if number of images changes

    // Function to handle manual navigation (left arrow)
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + backgroundImages.length) % backgroundImages.length
        );
    };

    // Function to handle manual navigation (right arrow)
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % backgroundImages.length
        );
    };

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-start overflow-hidden transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url("${backgroundImages[currentImageIndex]}")` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

            {/* Header */}
            <header className="w-full flex justify-between items-center p-4 md:px-8 lg:px-12 z-20 box-border">
                {/* Daffodils Group Logo SVG */}
                <div className="bg-yellow-300 rounded-full px-4 py-2 text-black font-bold">
                    Daffodils
                </div>
                
                <div className="text-3xl cursor-pointer">&#x2261;</div> {/* Hamburger icon */}
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-5 z-20 max-w-3xl">
                <p className="text-sm md:text-base mb-2 tracking-wide opacity-80">
                    DON'T LOOK FURTHER, HERE IS THE KEY
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight max-w-4xl">
                    We're Industrial Raw material Suppliers
                </h1>
                <p className="text-base md:text-lg mb-8 max-w-xl leading-relaxed opacity-90">
                    We are leaders in Mining, Infrastructure and Advertising
                </p>
                <a
                    href="#contact"
                    className="bg-yellow-400 text-gray-800 px-6 py-3 md:px-8 md:py-4 text-lg font-bold rounded-md cursor-pointer inline-block hover:bg-yellow-500 transition-colors"
                >
                    CONTACT US
                </a>
            </main>

            {/* Navigation Arrows (manual control) */}
            <div
                className="absolute top-1/2 -translate-y-1/2 left-2 text-5xl cursor-pointer z-20 text-white opacity-70 hover:opacity-100 transition-opacity"
                onClick={goToPreviousImage}
            >
                &lt;
            </div>
            <div
                className="absolute top-1/2 -translate-y-1/2 right-2 text-5xl cursor-pointer z-20 text-white opacity-70 hover:opacity-100 transition-opacity"
                onClick={goToNextImage}
            >
                &gt;
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/yourphonenumber" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg cursor-pointer z-50 hover:bg-green-600 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/whatsapp-stroke-standard.svg" role="img" color="#ffffff">
                    <path d="M8.6175 12.4037L10.4966 10.5L10.0004 7H7C7.00036 10 8.58063 13.4407 11.6225 15.4209M11.6225 15.4209C13.1131 16.3912 14.9993 17 17 17V14L13.4982 13.5L11.6225 15.4209Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.0019 22.002C17.5259 22.002 22.0039 17.5239 22.0039 12C22.0039 6.47607 17.5259 1.99805 12.0019 1.99805C6.47802 1.99805 2 6.47607 2 12C2 13.8889 2.43396 15.4979 3.34399 17.005L2.00177 22L6.97239 20.666C8.48539 21.5862 10.1017 22.002 12.0019 22.002Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <div className="absolute bottom-[-25px] text-xs text-gray-200 whitespace-nowrap">
                    GetButton
                </div>
            </a>
        </div>
    );
}