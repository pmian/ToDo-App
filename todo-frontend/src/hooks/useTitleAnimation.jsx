import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitleAnimation = () => {
  const routeTitles = {
    "/": "Home - To-Do App ✅",
    "/login": "Login - To-Do App 🔑",
    "/register": "Sign Up - To-Do App 📝",
    "/privacy-policy": "Privacy Policy - To-Do App 🔒",
    "/terms-and-conditions": "Terms & Conditions - To-Do App 📜",
    "/dashboard": "Dashboard - To-Do App 📊",
    "/add-task": "Add Task - To-Do App ➕",
    "/tasks": "Your Tasks - To-Do App 🗂️",
    "/profile": "Your Profile - To-Do App 👤",
  };

  const location = useLocation();
  const baseTitle = routeTitles[location.pathname] || "To-Do App";
  const [title, setTitle] = useState(baseTitle);

  useEffect(() => {
    setTitle(baseTitle + " ⌛"); // Reset title when route changes
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => prev.slice(1) + prev.charAt(0)); // Rotate text
    }, 300); // Adjust speed (higher = slower)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    document.title = title; // Update browser title
  }, [title]);
};

export default useTitleAnimation;
