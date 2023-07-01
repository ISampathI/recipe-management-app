import { ActionTypes } from "../constants/actionTypes";

export const recipeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RECIPES:
      return payload;
    default:
      return state;
  }
};

export const selectedRecipeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_RECIPE:
      return payload;
    default:
      return state;
  }
};
