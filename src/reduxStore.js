import { configureStore } from '@reduxjs/toolkit';

// Initial example of redux usage
// const userInitialState = { user: 'not logged in' };

// const userReducer = (state = userInitialState, action) => {
//   if (action.type === "USER_LOGGED_IN") {
//   return { user: "is logged in" };
    
//   }
//   return state;
// }


const shoppingCartInitialState = [];

export const addItemToCartAction = "addItemToCart";
export const removeItemFromCartAction = "removeItemFromCart";
export const emptyCartAction = "emptyCart";

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
	if (action.type === addItemToCartAction) {
		const itemFoundInCart = state.find(
			(cartItem) => cartItem.id === action.cartItem.id
		);

		if (!itemFoundInCart) {
			return [...state, { ...action.cartItem, quantity: 1 }];
		}

		const cartWithFoundItemRemoved = state.filter(
			(item) => item.id !== action.cartItem.id
		);

		return [
			...cartWithFoundItemRemoved,
			{ ...action.cartItem, quantity: itemFoundInCart.quantity + 1 },
		];
	}

	if (action.type === removeItemFromCartAction) {
		return state.filter((item) => item.id !== action.itemId);
	}
	if (action.type === emptyCartAction) {
		return shoppingCartInitialState;
  }
  return state;
};

const userInitalState = null;
export const signInUserAction = "signIn";

const userSignInReducer = (state = userInitalState, action) => {
  if (action.type === signInUserAction) {
    return action.data;   
  }
  return state;
}
const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userSignInReducer,
  },
});

export default store;