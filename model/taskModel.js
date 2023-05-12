const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
  {
    taskTitle: { type: String, required: true },
    taskDescription: { type: String, required: true },
    taskPriority: { type: String, required: true },
    taskStatus: { type: String, required: true },
    taskDueDate: { type: Date, required: true },
  },
  { timestamps: true }
);
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
