import React, { useState, useEffect, useCallback } from "react";
import testimonials from "../../data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const nextTestimonial = useCallback(() => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setIsSliding(false);
        }, 500);
    }, [isSliding]);

    const prevTestimonial = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
            );
            setIsSliding(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 6000);
        return () => clearInterval(interval);
    }, [nextTestimonial]); // ✅ Fixed dependency issue

    return (
        <div className="flex flex-col items-center py-12 bg-gray-200 px-4 relative">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                What Our Users Say
            </h1>

            <div className="relative flex justify-center items-center w-full max-w-5xl gap-6">
                {/* Previous Button */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 
                     bg-black text-white p-3 md:p-4 rounded-full shadow-2xl border-white/40
                     hover:bg-gray-700 hover:scale-110 transition-all duration-300 z-50"
                >
                    <ChevronLeft size={36} />
                </button>

                {/* Testimonial Boxes */}
                <div className="relative flex justify-center items-center w-full max-w-4xl overflow-hidden">
                    <div className={`flex transition-transform duration-700 ease-in-out`}>
                        {/* Left Testimonial */}
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg 
                          rounded-xl p-5 md:p-6 w-1/4 sm:w-1/3 text-center 
                          h-56 md:h-60 flex flex-col justify-center">
                            <p className="text-sm md:text-base italic text-white">
                                {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].quote}
                            </p>
                            <h3 className="mt-3 text-sm md:text-base font-semibold text-white">
                                {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                            </h3>
                        </div>

                        {/* Middle Testimonial */}
                        <div className="bg-gradient-to-b from-yellow-500 to-amber-600 shadow-2xl 
                          rounded-2xl p-7 md:p-9 w-2/4 sm:w-1/2 text-center scale-110 
                          h-56 md:h-60 flex flex-col justify-center border-4 border-yellow-300">
                            <p className="text-lg md:text-xl italic text-gray-900 font-semibold">
                                {testimonials[currentIndex].quote}
                            </p>
                            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                                {testimonials[currentIndex].name}
                            </h3>
                        </div>

                        {/* Right Testimonial */}
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg 
                          rounded-xl p-5 md:p-6 w-1/4 sm:w-1/3 text-center 
                          h-56 md:h-60 flex flex-col justify-center">
                            <p className="text-sm md:text-base italic text-white">
                                {testimonials[(currentIndex + 1) % testimonials.length].quote}
                            </p>
                            <h3 className="mt-3 text-sm md:text-base font-semibold text-white">
                                {testimonials[(currentIndex + 1) % testimonials.length].name}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextTestimonial}
                    className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 
                     bg-black text-white p-3 md:p-4 rounded-full shadow-2xl border-white/40
                     hover:bg-gray-700 hover:scale-110 transition-all duration-300 z-50"
                >
                    <ChevronRight size={36} />
                </button>
            </div>
        </div>
    );
}

export default Reviews;
