const express = require('express');
const { addTodo } = require('../controllers/todo.controller');
const todoRouter = express.Router();



todoRouter.post('/',addTodo)




module.exports =todoRouter;