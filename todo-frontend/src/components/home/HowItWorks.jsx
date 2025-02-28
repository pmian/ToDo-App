import React from "react";

const steps = [
    { title: "Sign Up", description: "Create an account with your email or Google login.", icon: "📝" },
    { title: "Create Tasks", description: "Easily add tasks with due dates and priorities.", icon: "✅" },
    { title: "Stay Organized", description: "Use categories, tags, and reminders to manage tasks efficiently.", icon: "📅" },
];

const HowItWorks = () => {
    return (
        <div className="max-w-4xl mx-auto my-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                    >
                        <div className="text-5xl sm:text-6xl">{step.icon}</div>
                        <h3 className="text-xl font-semibold mt-3 text-gray-800 dark:text-white">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
