import actionTypes from '../actionTypes';

export const toggleFavorites = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    payload: id,
  };
};
