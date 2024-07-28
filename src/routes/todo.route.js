const express = require('express');
const { addTodo, getTodoById, getTodoListing, updateTodo, deleteTodo } = require('../controllers/todo.controller');
const todoRouter = express.Router();



todoRouter.get('/list',getTodoListing)
todoRouter.get('/:id',getTodoById);
todoRouter.post('/',addTodo);
todoRouter.put('/:id',updateTodo);
todoRouter.delete('/:id',deleteTodo);





module.exports =todoRouter;