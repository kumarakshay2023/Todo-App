require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/db/conn");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: false,
    statusCode: err.statusCode || 500,
    message: err.message,
  });
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection Error:", err);
  });
