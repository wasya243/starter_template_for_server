const createHttpError = require('http-errors');

const { Todo } = require('../../models');

class Todos {
  static async createTodo(req, res, next) {
    try {
      const { text, user_id, due_date } = req.body;

      await Todo.create({
        text,
        user_id,
        due_date
      });

      res.send('saved');
    } catch (err) {
      next(createHttpError(500, { message: err.message }));
    }
  }

  static async deleteTodo(req, res, next) {
    try {
      const id = req.params.id;

      await Todo.delete(id);

      res.send('deleted');
    } catch (err) {
      next(createHttpError(500, { message: err.message }));
    }
  }

  static async patchTodo(req, res, next) {
    try {
      const id = req.params.id;
      const { is_completed } = req.body;

      await Todo.update(id, { is_completed });

      res.send('updated');
    } catch (err) {
      next(createHttpError(500, { message: err.message }));
    }
  }

  static async getTodos(req, res, next) {
    try {
      const userId = req.params.id;

      const todos = await Todo.getAll(userId);

      res.send(todos);
    } catch (err) {
      next(createHttpError(500, { message: err.message }));
    }
  }
}

module.exports = Todos;
