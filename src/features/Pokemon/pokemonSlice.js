import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemons: {},
  pokemonsDetails: [],
  sprite: "",
  abilities: [],
  types: [],
  stats: [],
  movesModal: false,
  moves: [],
  pages: "",
  pokemonSearched: [],
}

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (term = "") => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data;
  },
);

export const fetchPokemonsDetails = createAsyncThunk(
  "pokemon/fetchPokemonDetails",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data;
  },
);

export const fetchPokemonImages = createAsyncThunk(
  "pokemon/fetchPokemonImages",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data['sprites']['front_default'];
  },
);

export const fetchPokemonAbilities = createAsyncThunk(
  "pokemon/fetchPokemonAbilities",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data.abilities;
  },
);

export const fetchPokemonTypes = createAsyncThunk(
  "pokemon/fetchPokemonTypes",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data.types;
  },
);

export const fetchPokemonStats = createAsyncThunk(
  "pokemon/fetchPokemonStats",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data.stats;
  },
);

export const fetchPokemonPages = createAsyncThunk(
  "pokemon/fetchPokemonPages",
  async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`);
    return response.data;
  },
);

export const fetchPokemonMoves = createAsyncThunk(
  "pokemon/fetchPokemonMoves",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data.moves;
  },
);

export const fetchSearchedPokemons = createAsyncThunk(
  "pokemon/fetchSearchedPokemons",
  async (term) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return response.data;
  },
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    pokemonModal: (state) => {
      state.movesModal = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemons.pending, state => {
      state.pokemons = {};
    });
    builder.addCase(fetchPokemons.fulfilled, (state, { payload }) => {
      state.pokemons = payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, { payload }) => {
      state.pokemons = payload;
    });
    builder.addCase(fetchPokemonsDetails.fulfilled, (state, { payload }) => {
      state.pokemonsDetails = payload;
    });
    builder.addCase(fetchPokemonsDetails.pending, (state) => {
      state.pokemonsDetails = "loading";
    });
    builder.addCase(fetchPokemonImages.fulfilled, (state, { payload }) => {
      state.sprite = payload;
    });
    builder.addCase(fetchPokemonAbilities.fulfilled, (state, { payload }) => {
      state.abilities = payload
    });
    builder.addCase(fetchPokemonTypes.fulfilled, (state, { payload }) => {
      state.types = payload;
    });
    builder.addCase(fetchPokemonStats.fulfilled, (state, { payload }) => {
      state.stats = payload;
    });
    builder.addCase(fetchPokemonMoves.fulfilled, (state, { payload }) => {
      state.moves = payload;
    });
    builder.addCase(fetchPokemonPages.fulfilled, (state, { payload }) => {
      state.pages = payload;
    });
    builder.addCase(fetchSearchedPokemons.fulfilled, (state, { payload }) => {
      state.pokemonSearched = payload;
    });
  }
});

export default pokemonSlice.reducer;
export const { pokemonModal } = pokemonSlice.actions;
