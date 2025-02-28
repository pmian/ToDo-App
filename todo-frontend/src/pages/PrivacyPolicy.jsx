import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 p-6 flex items-center justify-center">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-400 mb-6">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                    <ul className="list-disc ml-6 mt-2 text-gray-300">
                        <li><strong>Personal Information:</strong> Name, email address, profile picture (if provided).</li>
                        <li><strong>Task Data:</strong> Titles, descriptions, priority, due dates, and categories.</li>
                        <li><strong>Usage Data:</strong> Login times, features used.</li>
                        <li><strong>Device Information:</strong> Browser type, IP address, OS.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                    <p className="mt-2 text-gray-300">
                        We use your information to provide, improve, and secure our services, personalize your experience,
                        and send important updates.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">3. Data Sharing & Security</h2>
                    <p className="mt-2 text-gray-300">
                        We do not sell or share your personal information with third parties. Your data is securely stored,
                        and we comply with security and privacy regulations.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">4. User Control & Data Deletion</h2>
                    <p className="mt-2 text-gray-300">
                        You can edit or delete your tasks at any time. To delete your account, contact our support team.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">5. Changes to This Privacy Policy</h2>
                    <p className="mt-2 text-gray-300">
                        We may update this policy from time to time. We will notify you of any significant changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
                    <p className="mt-2 text-gray-300">For any questions, reach us at 📧 <strong>[Your Support Email]</strong></p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
