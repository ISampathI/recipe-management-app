const mongoose = require("mongoose");

// Define the recipe schema
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
