import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footter } from "./components/Footter";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { CatalogPage } from "./pages/CatalogPage";
import { GardenInventoryPage } from "./pages/GardenInventoryPage";
import { CartPage } from "./pages/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/garden-inventory-page"
          element={<GardenInventoryPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>
      <Footter />
    </div>
  );
}

export default App;
