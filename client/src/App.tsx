import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footter } from "./components/Footter";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footter />
    </div>
  );
}

export default App;
