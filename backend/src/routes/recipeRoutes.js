const express = require("express");
const router = express.Router();
const Recipe = require("../../src/models/recipeModel");
const recipeController = require("../../src/controllers/recipeController");

// Get all recipes
router.get("/", recipeController.getAllRecipes);

router.get("/:id", recipeController.getRecipeById);

router.post("/", recipeController.createRecipe);

router.put("/:id", recipeController.updateRecipe);

router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
