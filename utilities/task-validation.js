const { body, validationResult } = require('express-validator');

const validateTask = {};

validateTask.validateTaskRules = () => {
  return [
    body('taskTitle')
      .isLength({ min: 1 })
      .trim()
      .withMessage('Task title is required1'),

    body('taskDescription')
      .isLength({ min: 1 })
      .trim()
      .withMessage('Task description is required1'),

    body('taskPriority')
      .isLength({ min: 1 })
      .trim()
      .withMessage('Task priority is required1'),

    body('taskStatus')
      .isLength({ min: 1 })
      .trim()
      .withMessage('Task status is required1'),

    body('taskDueDate')
      .isLength({ min: 1 })
      .trim()
      .withMessage('Task due date is required1'),
  ];
};

validateTask.checkTaskData = (req, res, next) => {
  const { taskTitle, taskDescription, taskPriority, taskStatus, taskDueDate } =
    req.body;
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validateTask;
