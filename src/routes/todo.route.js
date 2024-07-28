const express = require('express');
const { addTodo, getTodoById } = require('../controllers/todo.controller');
const todoRouter = express.Router();



todoRouter.get('/:id',getTodoById);
todoRouter.post('/',addTodo);





module.exports =todoRouter;