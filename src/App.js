import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import "./App.css";

function App() {
  return <div className="App">
    <HomePage />
  </div>;
}

export default App;
