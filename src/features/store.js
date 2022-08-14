import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./Pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});


