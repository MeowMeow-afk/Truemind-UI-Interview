import { actionTypes } from "./actionsTypes";

export const addToList = (list) => ({
  type: actionTypes.ADD_TO_LIST,
  payload: {
    list,
  },
});

export const addToCart = (data) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    cartState: data,
  },
});

export const updateAmount = (amountToUpdate, id) => ({
  type: actionTypes.UPDATE_AMOUNT,
  payload: {
    amountToUpdate,
    id,
  },
});
