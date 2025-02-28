import React from "react";
import { FaTasks, FaBell, FaUsers } from "react-icons/fa";

function Features() {
    return (
        <div className="mt-16 px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8">
                <div className="p-6 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition-all">
                    <FaTasks className="text-4xl text-blue-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white">Task Management</h3>
                    <p className="text-gray-400 mt-2 text-lg">
                        Easily add, edit, and organize your tasks.
                    </p>
                </div>
                <div className="p-6 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition-all">
                    <FaBell className="text-4xl text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white">Reminders & Notifications</h3>
                    <p className="text-gray-400 mt-2 text-lg">
                        Never miss a task with timely reminders.
                    </p>
                </div>
                <div className="p-6 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl transition-all">
                    <FaUsers className="text-4xl text-green-400 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white">Collaboration</h3>
                    <p className="text-gray-400 mt-2 text-lg">
                        Share tasks and collaborate with others.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Features;
