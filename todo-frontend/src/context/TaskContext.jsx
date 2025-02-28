import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { token } = useAuth();
    const [tasks, setTasks] = useState([]);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    // Fetch tasks
    useEffect(() => {
        if (token) {
            axios.get(`${BACKEND_URL}/api/tasks`, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setTasks(res.data.tasks))
                .catch(err => console.error("Error fetching tasks:", err));
        }
    }, [token, BACKEND_URL]);

    // Add Task
    const addTask = async (taskData) => {
        try {
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const res = await axios.post(`${BACKEND_URL}/api/tasks/add`, taskData, config);
            setTasks(prevTasks => [...prevTasks, res.data.task]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    // delete task
    const deleteTask = async (taskId) => {
        try {
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            await axios.delete(`${BACKEND_URL}/api/tasks/${taskId}`, config);

            // Remove task from local state
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // edit task
    const editTask = async (taskId, updatedTaskData) => {
        try {
            const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
            const res = await axios.put(`${BACKEND_URL}/api/tasks/edit/${taskId}`, updatedTaskData, config);

            // Update state
            setTasks((prevTasks) => prevTasks.map(task => task._id === taskId ? res.data.task : task));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };



    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
