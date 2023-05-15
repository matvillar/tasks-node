const router = require('express').Router();
const taskController = require('../controllers/taskController');
const validateTask = require('../utilities/task-validation');

// Create a task
router.post(
  '/tasks',
  validateTask.validateTaskRules(),
  validateTask.checkTaskData,
  taskController.createTask
);

// Get all tasks
router.get('/tasks', taskController.getAllTasks);

// Get one task by id
router.get('/tasks/:id', taskController.getTaskById);

// Update one task by id
router.put('/tasks/:id', taskController.updateTaskById);

// Delete one task by id
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;
