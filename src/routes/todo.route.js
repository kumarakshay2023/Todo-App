const express = require('express');
const { addTodo, getTodoById, getTodoListing, updateTodo } = require('../controllers/todo.controller');
const todoRouter = express.Router();



todoRouter.get('/list',getTodoListing)
todoRouter.get('/:id',getTodoById);
todoRouter.post('/',addTodo);
todoRouter.put('/:id',updateTodo);





module.exports =todoRouter;