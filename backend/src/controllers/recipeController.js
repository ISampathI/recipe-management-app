const Recipe = require("../../src/models/recipeModel");

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  const { name, ingredients, description } = req.body;
  try {
    const recipe = await Recipe.create({
      name: name,
      ingredients: ingredients,
      description: description,
    });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, description } = req.body;
  console.log(req.body);
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      id,
      { name, ingredients, description },
      { new: true }
    );
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
