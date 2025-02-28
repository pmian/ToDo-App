import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <div className="bg-blue-600 dark:bg-blue-800 text-white py-10 px-6 sm:px-12 text-center rounded-2xl shadow-lg max-w-3xl mx-auto my-8">
            <h2 className="text-xl sm:text-3xl font-bold">Boost Your Productivity Today!</h2>
            <p className="mt-2 text-lg sm:text-xl">Start managing your tasks efficiently with our powerful to-do app.</p>
            <div className="mt-4">
                <Link
                    to="/register"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-gray-300 transition-all duration-300"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default CTA;