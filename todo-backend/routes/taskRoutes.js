import express from "express";
import Task from "../models/Task.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 Add Task (Protected Route)
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { title, description, priority, dueDate, category } = req.body;

        const newTask = new Task({
            title,
            description,
            priority,  // ✅ Now storing priority
            dueDate,   // ✅ Now storing due date
            category,  // ✅ Now storing category
            userId: req.user.id,
        });

        await newTask.save();
        res.status(201).json({ success: true, message: "Task added successfully", task: newTask });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// 🔹 Delete Task (Protected Route)
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        
        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});


// edit task
router.put("/edit/:id", authMiddleware, async (req, res) => {
    try {
        const { title, description, status, priority, dueDate, category } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, status, priority, dueDate, category },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});




// 🔹 Get User Tasks (Protected Route)
router.get("/", authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });  // ✅ Sorting by newest first
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
