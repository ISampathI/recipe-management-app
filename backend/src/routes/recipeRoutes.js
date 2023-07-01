const express = require("express");
const router = express.Router();
const Recipe = require("../../src/models/recipeModel");
//const recipeController = require("../controllers/recipeController");

// Get all recipes
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/:id", (req, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  try {
    const recipe = await new Recipe({
      name: "s0",
      ingredients: "ss",
      description: "bbb",
    });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", (req, res) => {
  res.send("Hello World!");
});

router.delete("/:id", (req, res) => {
  res.send("Hello World!");
});

// Create a new recipe
// router.post("/", recipeController.createRecipe);

module.exports = router;
