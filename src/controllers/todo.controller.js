const { Todo } = require("../models/Todo.model");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title) throw new ApiError("Title is required", 400);
  await Todo.create({ title: title, description: description });
  return res.status(200).json({
    message: "Todo added successfully",
    success: true,
  });
});

exports.getTodoById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const findTodo = await Todo.findById(id);
  if (!findTodo) throw new ApiError("Todo not found", 404);
  return res.status(200).json({
    data: findTodo,
    success: true,
  });
});

exports.getTodoListing = asyncHandler(async (req, res) => {
  const todoList = await Todo.find();
  if (!todoList) throw new ApiError("No todo found!", 404);
  return res.status(200).json({
    data: todoList,
    success: true,
  });
});

exports.updateTodo = asyncHandler(async (req, res) => {
  const { title, description, is_completed } = req.body;
  const { id } = req.params;
  if (!id) throw new ApiError("Id must be provided", 400);
  const findTodo = await Todo.findById(id);
  if(!findTodo) throw new ApiError("Todo not found!",404)
   await Todo.updateOne({ _id: id }, { title, description, is_completed });
  return res.status(200).json({
    message: "Todo updated sucessfully",
    success: true,
  });
});

exports.deleteTodo = asyncHandler(async (req, res) => {
      const {id} = req.params;
      if (!id) throw new ApiError("Id must be provided", 400);
      const findTodo = await Todo.findById(id);
      if(!findTodo) throw new ApiError("Todo not found!",404)
      await Todo.deleteOne({ _id: id })
    return res.status(200).json({
        message: "Todo deleted succesfully",
        success: true,
    })

})
