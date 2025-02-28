import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    if (!user) return null; // Prevent rendering if user is null

    // Generate initials if no profile picture
    const getInitials = (name) => {
        return name
            ? name
                .split(" ")
                .map((n) => n[0].toUpperCase())
                .join("")
            : "U";
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300 dark:bg-gray-950 dark:text-gray-200 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center w-full max-w-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Profile Picture or Initials */}
                <div className="mb-4">
                    {user.profilePic ? (
                        <img
                            src={user.profilePic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-700"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-bold bg-blue-600 text-white border-4 border-gray-700">
                            {getInitials(`${user.firstName} ${user.lastName}`)}
                        </div>
                    )}
                </div>

                {/* User Info */}
                <h2 className="text-3xl font-bold mb-2">{user.firstName} {user.lastName}</h2>
                <p className="text-lg text-gray-400 mb-4">{user.email}</p>

                {/* Additional Info */}
                {user.createdAt && (
                    <p className="text-sm text-gray-500 mb-4">Joined on: {new Date(user.createdAt).toLocaleDateString()}</p>
                )}

                {/* Logout Button */}
                <motion.button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Logout
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Profile;
