const express = require('express');
const connectDB = require('./config/database'); 
const todosRoutes = require('./routes/todo.Routes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', todosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor ativado na porta ${PORT}`);
});
