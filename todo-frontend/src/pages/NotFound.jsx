import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">404</h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mt-2">Page Not Found</p>
            <p className="text-lg md:text-xl lg:text-2xl mt-2 mb-6 max-w-xl">
                The page you're looking for doesn't exist.
            </p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base lg:text-lg"
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;
