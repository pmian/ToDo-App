import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },  // ✅ Added
    dueDate: { type: Date },  // ✅ Added
    category: { type: String, default: "General" },  // ✅ Added
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
