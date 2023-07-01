const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const recipeRoutes = require("./src/routes/recipeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URL
const url = `mongodb+srv://sampath:Sampath123@cluster0.zikbkf9.mongodb.net/RMA-API?retryWrites=true&w=majority`;
const port = 5000;

// Connect to MongoDB database
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

//Routes for handling recipe related requests
app.use("/recipes", recipeRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
