import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { FaTrash, FaEdit, FaCheck, FaClock, FaTimes } from "react-icons/fa";

const ViewTasks = () => {
    const { tasks, deleteTask, editTask } = useTasks();
    const [editMode, setEditMode] = useState(null);
    const [editedTask, setEditedTask] = useState({});

    const handleEdit = (task) => {
        setEditMode(task._id);
        setEditedTask(task);
    };

    const handleSave = async () => {
        await editTask(editMode, editedTask);
        setEditMode(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-950 text-white">
            <h2 className="text-3xl font-bold text-gray-200 mb-8">Your Tasks</h2>

            {tasks.length === 0 ? (
                <p className="text-gray-400 text-lg">No tasks available. Add a task to get started!</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-[1.02]"
                        >
                            {editMode === task._id ? (
                                <>
                                    {/* Title */}
                                    <input
                                        type="text"
                                        className="w-full border border-gray-600 p-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 transition"
                                        value={editedTask.title}
                                        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                                    />

                                    {/* Description */}
                                    <textarea
                                        className="w-full border border-gray-600 p-2 bg-gray-700 text-white rounded mt-2 resize-none focus:ring-2 focus:ring-blue-500 transition"
                                        value={editedTask.description}
                                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                                    />

                                    {/* Priority */}
                                    <select
                                        className="w-full border border-gray-600 p-2 mt-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 transition"
                                        value={editedTask.priority}
                                        onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>

                                    {/* Due Date */}
                                    <input
                                        type="date"
                                        className="w-full border border-gray-600 p-2 mt-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 transition"
                                        value={editedTask.dueDate ? editedTask.dueDate.split("T")[0] : ""}
                                        onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                                    />

                                    {/* Category */}
                                    <select
                                        className="w-full border border-gray-600 p-2 mt-2 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 transition"
                                        value={editedTask.category}
                                        onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
                                    >
                                        <option value="General">General</option>
                                        <option value="Work">Work</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Study">Study</option>
                                    </select>

                                    {/* Save & Cancel Buttons */}
                                    <div className="flex gap-2 mt-3">
                                        <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white w-full flex items-center justify-center gap-2 transition" onClick={handleSave}>
                                            <FaCheck /> Save
                                        </button>
                                        <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white w-full flex items-center justify-center gap-2 transition" onClick={() => setEditMode(null)}>
                                            <FaTimes /> Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Task Title */}
                                    <h3 className={`text-xl font-semibold ${task.status === "completed" ? "line-through text-gray-400" : "text-white"}`}>
                                        {task.title}
                                    </h3>

                                    {/* Task Description */}
                                    <p className="text-gray-400 text-sm mt-2">{task.description}</p>

                                    {/* Task Details */}
                                    <div className="mt-4">
                                        <p className="text-gray-300 text-sm"><strong>Priority:</strong> {task.priority}</p>
                                        <p className="text-gray-300 text-sm"><strong>Due Date:</strong> {task.dueDate ? task.dueDate.split("T")[0] : "Not Set"}</p>
                                        <p className="text-gray-300 text-sm"><strong>Category:</strong> {task.category}</p>
                                    </div>

                                    {/* Task Actions */}
                                    <div className="flex gap-3 mt-4">
                                        <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white flex items-center justify-center transition" onClick={() => handleEdit(task)}>
                                            <FaEdit />
                                        </button>
                                        <button className="p-3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center transition" onClick={() => deleteTask(task._id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewTasks;
