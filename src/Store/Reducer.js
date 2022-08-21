import { actionTypes } from "./actionsTypes";

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST:
      const { list } = action.payload;
      return { ...state, mutualFundList: list };
    case actionTypes.ADD_TO_CART:
      const { cartState } = action.payload;
      let dataToAdd = {
        id: cartState?.id,
        amount: 0,
        errorMsg: "",
        name: cartState?.name,
        classification: cartState?.classification,
        category: cartState?.category,
        maximumPurchaseAmount: +(+cartState?.maximumPurchaseAmount).toFixed(),
        minimumPurchaseAmount: +(+cartState?.minimumPurchaseAmount).toFixed(),
      };
      if (state.cartState.length === 0)
        return {
          ...state,
          cartState: [dataToAdd],
        };

      let flag = false;
      for (let i = 0; i < state.cartState.length; i++) {
        const element = state.cartState[i];
        if (element.id === dataToAdd.id) {
          flag = true;
          break;
        }
      }
      if (flag) {
        return state;
      }
      return {
        ...state,
        cartState: [...state.cartState, dataToAdd],
      };
    case actionTypes.UPDATE_AMOUNT:
      const { amountToUpdate, id } = action.payload;
      const cartToUpdate = state.cartState.filter(
        (cartItem) => cartItem.id === id
      )[0];
      const minAmount = +cartToUpdate.minimumPurchaseAmount;
      const maxAmount = +cartToUpdate.maximumPurchaseAmount;
      cartToUpdate.errorMsg = "";
      cartToUpdate.amount = amountToUpdate;
      if (cartToUpdate.amount < minAmount) {
        cartToUpdate.errorMsg = `Please enter an amount more than ₹ ${minAmount}`;
      }
      if (cartToUpdate.amount > maxAmount) {
        cartToUpdate.errorMsg = `Please enter an amount less than ₹ ${maxAmount}`;
      }
      const updatedCartState = state.cartState.map((cartItem) => {
        if (cartItem.id === id) return cartToUpdate;
        return cartItem;
      });
      return { ...state, cartState: updatedCartState };
    default:
      return state;
  }
}

export default reducer;
