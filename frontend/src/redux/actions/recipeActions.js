import { ActionTypes } from "../constants/actionTypes";

export const setRecipes = (recipes) => {
  return {
    type: ActionTypes.SET_RECIPES,
    payload: recipes,
  };
};

export const selectRecipe = (recipe) => {
  return {
    type: ActionTypes.SELECT_RECIPE,
    payload: recipe,
  };
};

export const removeSelectedRecipe = (recipe) => {
  return {
    type: ActionTypes.SELECT_RECIPE,
    payload: recipe,
  };
};
