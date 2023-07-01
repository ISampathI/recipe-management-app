const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const recipeRoutes = require("./src/routes/recipeRoutes");
const port = 5000;

const url = `mongodb+srv://sampath:Sampath123@cluster0.zikbkf9.mongodb.net/RMA-API?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use("/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
