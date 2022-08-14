import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Navigate to="/home" /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/pokemon/:pokemonId" element={ <PokemonDetails /> } />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
