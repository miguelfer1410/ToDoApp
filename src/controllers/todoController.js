const Todo = require('../models/todoModel');

exports.createTodo = (req, res) => {
    const { title, description, dueDate, done } = req.body;

    const todo = new Todo({
        title,
        description,
        dueDate,
        done
    });

    todo.save()
        .then((savedTodo) => res.status(201).json(savedTodo))
        .catch((err) => res.status(400).json({ error: err.message }));
};

exports.getAllTodos = (req, res) => {
    Todo.find()
        .then((todos) => res.status(200).json(todos))
        .catch((err) => res.status(404).json({ error: err.message }));
};

exports.getTodoById = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
        .then((todo) => {
            if (todo) {
                res.status(200).json(todo);
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        })
        .catch((err) => res.status(404).json({ error: err.message }));
};
