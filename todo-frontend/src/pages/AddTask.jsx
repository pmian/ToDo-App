import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { FaPlus, FaCheckCircle, FaSpinner } from "react-icons/fa";

const AddTask = () => {
    const { addTask } = useTasks();
    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        category: "General",
    });
    const [added, setAdded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedTitle = task.title.trim();

        if (!trimmedTitle) {
            setError("Task title is required.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await addTask({ ...task, title: trimmedTitle });
            setTask({
                title: "",
                description: "",
                priority: "Medium",
                dueDate: "",
                category: "General",
            });
            setAdded(true);
            setTimeout(() => setAdded(false), 3000);
        } catch (err) {
            setError("Failed to add task. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white">
            <div className="max-w-lg w-full bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                    <FaPlus /> Add a New Task
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Task Title */}
                    <div>
                        <label className="text-sm font-semibold text-gray-300">Title</label>
                        <input
                            type="text"
                            placeholder="Task Title"
                            className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition"
                            value={task.title}
                            onChange={(e) => setTask({ ...task, title: e.target.value })}
                            required
                        />
                    </div>

                    {/* Task Description */}
                    <div>
                        <label className="text-sm font-semibold text-gray-300">Description</label>
                        <textarea
                            placeholder="Task Description (Optional)"
                            className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-white resize-none focus:ring-2 focus:ring-blue-500 transition"
                            value={task.description}
                            onChange={(e) => setTask({ ...task, description: e.target.value })}
                        />
                    </div>

                    {/* Priority Selection */}
                    <div>
                        <label className="text-sm font-semibold text-gray-300">Priority</label>
                        <select
                            className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition"
                            value={task.priority}
                            onChange={(e) => setTask({ ...task, priority: e.target.value })}
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="text-sm font-semibold text-gray-300">Due Date</label>
                        <input
                            type="date"
                            className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition"
                            value={task.dueDate}
                            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                        />
                    </div>

                    {/* Category Selection */}
                    <div>
                        <label className="text-sm font-semibold text-gray-300">Category</label>
                        <select
                            className="w-full border border-gray-600 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition"
                            value={task.category}
                            onChange={(e) => setTask({ ...task, category: e.target.value })}
                        >
                            <option value="General">General</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Study">Study</option>
                        </select>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Add Task Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition duration-300 disabled:bg-gray-600"
                        disabled={loading}
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />} Add Task
                    </button>

                    {/* Success Message */}
                    {added && (
                        <div className="text-green-400 flex items-center justify-center gap-2 text-lg mt-2">
                            <FaCheckCircle /> Task Added Successfully!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddTask;
