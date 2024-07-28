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
