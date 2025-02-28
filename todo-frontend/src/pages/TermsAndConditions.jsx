import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 p-6 flex items-center justify-center">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-4">Terms and Conditions</h1>
                <p className="text-sm text-gray-400 mb-6">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
                    <p className="mt-2 text-gray-300">
                        By using our service, you agree to these terms. If you do not agree, please do not use our platform.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">2. User Responsibilities</h2>
                    <ul className="list-disc ml-6 mt-2 text-gray-300">
                        <li>You must provide accurate and complete information.</li>
                        <li>You are responsible for keeping your account secure.</li>
                        <li>Do not use the service for illegal or harmful activities.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">3. Content and Ownership</h2>
                    <p className="mt-2 text-gray-300">
                        You own your tasks and data. We do not claim ownership over your content. However, we may analyze aggregated,
                        anonymized data to improve our services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">4. Account Termination</h2>
                    <p className="mt-2 text-gray-300">
                        We reserve the right to terminate or suspend your account if you violate these terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">5. Limitation of Liability</h2>
                    <p className="mt-2 text-gray-300">
                        We are not responsible for any damages resulting from the use of our service. Use at your own risk.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white">6. Changes to Terms</h2>
                    <p className="mt-2 text-gray-300">
                        We may update these terms. Continued use of the service means you accept the new terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">7. Contact Us</h2>
                    <p className="mt-2 text-gray-300">If you have questions, contact us at 📧 <strong>[Your Support Email]</strong></p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
