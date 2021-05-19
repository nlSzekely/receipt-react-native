import { MEALS } from '../../data/testData';
import actionTypes from '../actionTypes';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      if (state.favoriteMeals.find((meal) => meal.id === action.payload)) {
        return { ...state, favoriteMeals: state.favoriteMeals.filter((meal) => meal.id !== action.payload) };
      } else {
        return { ...state, favoriteMeals: [...state.favoriteMeals, state.meals.find((meal) => meal.id === action.payload)] };
      }
    default:
      return state;
  }
};

export default mealReducer;
