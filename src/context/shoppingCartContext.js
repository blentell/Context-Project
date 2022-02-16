import { createContext, useReducer, useContext } from "react";

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  
	return (
		<shoppingCartContext.Provider value={shoppingCartContext}>
			{children}
		</shoppingCartContext.Provider>
	);
};