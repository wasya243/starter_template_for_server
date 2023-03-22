const express = require('express');

const validate = require('../../middlewares/validation');
const TodosHandler = require('../handlers/todos');

class TodosRouter {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  getRouter() {
    return this.router;
  }

  setupRoutes() {
    this.router.patch('/todos/:id', validate('patchTodo', 'body'), TodosHandler.patchTodo);
    this.router.get('/todos/:id', TodosHandler.getTodos);
    this.router.post('/todos', validate('createTodo', 'body'), TodosHandler.createTodo);
    this.router.delete('/todos/:id', TodosHandler.deleteTodo);
  }
}

module.exports = TodosRouter;
