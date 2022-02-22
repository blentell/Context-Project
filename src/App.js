import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import store from './reduxStore';


function App() {
  return (
		<Provider store={store}>
			{/* <ShoppingCartProvider> */}
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePage />}></Route>
						<Route path="cart" element={<CartPage />}></Route>
						<Route path="signin" element={<SignInPage />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
			{/* </ShoppingCartProvider> */}
		</Provider>
	);
}

export default App;
