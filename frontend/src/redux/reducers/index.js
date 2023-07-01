import { combineReducers } from "redux";
import { recipeReducer, selectedRecipeReducer } from "./recipeReducer";

const reducers = combineReducers({
  recipes: recipeReducer,
  selectedRecipe: selectedRecipeReducer,
});

export default reducers;
