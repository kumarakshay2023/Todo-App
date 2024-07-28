const express = require('express');
const { addTodo, getTodoById, getTodoListing } = require('../controllers/todo.controller');
const todoRouter = express.Router();



todoRouter.get('/list',getTodoListing)
todoRouter.get('/:id',getTodoById);
todoRouter.post('/',addTodo);





module.exports =todoRouter;