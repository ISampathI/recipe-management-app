const express = require("express");
const recipeController = require("../../src/controllers/recipeController");
const router = express.Router();

// Get all recipes
router.get("/", recipeController.getAllRecipes);

// Get a recipe by ID
router.get("/:id", recipeController.getRecipeById);

// Create a new recipe
router.post("/", recipeController.createRecipe);

// Update a recipe by ID
router.put("/:id", recipeController.updateRecipe);

// Delete a recipe by ID
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
