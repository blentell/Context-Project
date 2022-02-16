import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import "./App.css";

function App() {
	return (
		<ShoppingCartProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="cart" element={<CartPage />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</ShoppingCartProvider>
	);
}

export default App;
