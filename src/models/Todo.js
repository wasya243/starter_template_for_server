const { Todo } = require('../db/models/todo');
class TodoModel {
  static async create({ text, user_id, due_date }) {
    const todoDoc = new Todo({
      text,
      user_id,
      due_date
    });

    return todoDoc.save();
  }

  static async delete(id) {
    return Todo.deleteOne({ _id: id });
  }

  static async update(id, { is_completed }) {
    return Todo.updateOne({ _id: id }, { is_completed });
  }

  static async getAll(userId) {
    return Todo.find({ user_id: userId });
  }
}

module.exports = TodoModel;
