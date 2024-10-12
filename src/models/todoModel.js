const mongoose = require('mongoose');
const Counter = require('./counterModel');  

const todoSchema = new mongoose.Schema({
    id: { type: Number, unique: true },      
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    done: { type: Boolean, default: false }
});

todoSchema.pre('save', function(next) {
    const todo = this;

    if (todo.isNew) {  
        Counter.findOneAndUpdate(
            { name: 'todo' },  
            { $inc: { seq: 1 } }, 
            { new: true, upsert: true }  
        ).then(counter => {
            todo.id = counter.seq;
            next();
        }).catch(err => next(err));
    } else {
        next();
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
