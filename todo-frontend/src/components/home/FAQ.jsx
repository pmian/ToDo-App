import React, { useState } from "react";

const faqData = [
    { question: "How do I reset my password?", answer: "Go to the settings page and click on 'Reset Password'." },
    { question: "Can I share my to-do lists with others?", answer: "Yes, you can collaborate by inviting users via email." },
    { question: "Is there a mobile app available?", answer: "Currently, we have a web app, and a mobile app is in development." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto my-8 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Frequently Asked Questions
            </h2>
            {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-300 dark:border-gray-700">
                    <button
                        className="w-full text-left flex justify-between items-center py-3 sm:py-4 text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-200 transition-all duration-300"
                        onClick={() => toggleFAQ(index)}
                    >
                        {item.question}
                        <span className="text-2xl transition-transform duration-300">
                            {openIndex === index ? "➖" : "➕"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                    >
                        <p className="text-gray-600 dark:text-gray-300 p-3">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;