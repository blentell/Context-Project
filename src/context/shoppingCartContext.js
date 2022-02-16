import { createContext, useReducer, useContext } from "react";

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);
const shoppingCartInitialState = [];

const addItemToCartAction = "addItemToCart";
const removeItemFromCartAction = "removeItemFromCart";
const emptyCartAction = "emptyCart";
const shoppingCartReducer = (state, action) => {
	if (action.type === addItemToCartAction) {
		//write some logic to add item to cart

		//Check if item exists already in cart
		const itemFoundInCart = state.find(
			(cartItem) => cartItem.id === action.cartItem.id
		);
		//if item does not exist, add it at end with qty of 1
		if (!itemFoundInCart) {
			return [...state, { ...action.cartItem, quantity: 1 }];
		}
		//if it is already in the cart, we will still remove it
		const cartWithFoundItemRemoved = state.filter(
			(item) => item.id !== action.cartItem.id
		);
		//but add it again with the correct qty
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
};

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  const [shoppingCart, dispatch] = useReducer(
		shoppingCartReducer,
		shoppingCartInitialState
	);

	const removeItem = (id) => {
		dispatch({ type: removeItemFromCartAction, itemId: id });
	};
	const addItemsToCart = (product) => {
		dispatch({
			type: addItemToCartAction,
			cartItem: {
				id: product.id,
				title: product.title,
				price: product.price,
				image: product.image,
			},
		});
	};
	const emptyCart = () => {
		dispatch({ type: emptyCartAction });
  };
  
   const total = shoppingCart.reduce((acc, cartItem) => {
			return acc + cartItem.price * cartItem.quantity;
   }, 0);
  
	const shoppingCartValue = {
		shoppingCart,
		removeItem,
		addItemsToCart,
		emptyCart,
		total,
	};
	return (
		<shoppingCartContext.Provider value={shoppingCartValue}>
			{children}
		</shoppingCartContext.Provider>
	);
};
