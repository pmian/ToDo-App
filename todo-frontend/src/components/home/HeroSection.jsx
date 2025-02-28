import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-6"
            style={{
                backgroundImage: "url('/assets/todo-homepage-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Quote Box */}
            <div className="bg-gray-800 bg-opacity-85 p-6 md:p-10 rounded-xl text-white text-center max-w-lg shadow-lg animate-fadeIn">
                <div className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                    "A goal without a plan is just a wish"
                </div>
                <div className="text-xl md:text-2xl italic font-sans mt-4 font-semibold">
                    – Antoine de Saint-Exupéry
                </div>
            </div>

            {/* Login/Register Buttons */}
            <div className="flex gap-4 mt-12 md:mt-16 w-full sm:w-auto">
                <Link
                    to="/login"
                    className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-green-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold transition duration-300 w-full sm:w-auto"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-green-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold transition duration-300 w-full sm:w-auto"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
