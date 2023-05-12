const Task = require('../model/taskModel');

const taskController = {};

// Create a task
taskController.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get all tasks
taskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one task by id
taskController.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Update one task by id
taskController.updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res.status(404).json({ message: 'Task not found!' });
    } else {
      const updatedTask = await Task.findById(id);
      res.status(200).json(updatedTask);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete one task by id
taskController.deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found!' });
    } else {
      res.status(200).json({ message: 'Task deleted!' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = taskController;
