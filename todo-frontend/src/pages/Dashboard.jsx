import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaTasks, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
    const { user } = useAuth();
    const { tasks } = useTasks();
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

    // Apply dark mode globally
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    // Toggle Dark Mode
    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    // Task Summary
    const taskSummary = {
        total: tasks.length,
        pending: tasks.filter((task) => task.status !== "completed").length,
        completed: tasks.filter((task) => task.status === "completed").length,
        dueToday: tasks.filter((task) => {
            const today = new Date().toISOString().split("T")[0];
            return task.dueDate === today;
        }).length,
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 dark:bg-gray-950 dark:text-gray-200 p-6 transition-all duration-300">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    Welcome, {user ? `${user.firstName} ${user.lastName}` : "User"} 👋
                </h1>

                {/* Dark Mode Toggle */}
                <button onClick={toggleDarkMode} className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg">
                    {darkMode ? <FaMoon className="text-blue-400" /> : <FaSun className="text-yellow-400" />}
                </button>
            </div>

            {/* Task Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                    { label: "Total Tasks", value: taskSummary.total, color: "text-white", icon: <FaTasks size={24} /> },
                    { label: "Pending", value: taskSummary.pending, color: "text-yellow-400", icon: <FaClock size={24} /> },
                    { label: "Completed", value: taskSummary.completed, color: "text-green-400", icon: <FaCheckCircle size={24} /> },
                    { label: "Due Today", value: taskSummary.dueToday, color: "text-red-400", icon: <FaExclamationCircle size={24} /> },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 dark:bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="mb-2">{stat.icon}</div>
                        <h3 className="text-xl font-semibold">{stat.label}</h3>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Tasks Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">Recent Tasks</h2>
                {tasks.length === 0 ? (
                    <p className="text-gray-400 mt-2">No tasks found. Add a task to get started!</p>
                ) : (
                    <motion.ul
                        className="mt-4 bg-gray-800 dark:bg-gray-700 p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {tasks.slice(0, 5).map((task) => (
                            <motion.li
                                key={task._id}
                                className="flex justify-between items-center py-2 border-b border-gray-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <div>
                                    <h3 className="text-lg font-semibold">{task.title}</h3>
                                    <p className="text-sm text-gray-400">{task.category} | Due: {task.dueDate || "Not Set"}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-lg text-sm ${task.status === "completed" ? "bg-green-600" : "bg-yellow-500"}`}>
                                    {task.status === "completed" ? "Completed" : "Pending"}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
