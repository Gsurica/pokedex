import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokemonListing = () => {

  const pokemons = useSelector(state => state.pokemon.pokemons);
  console.log(pokemons);

  return (
    <div className="w-full flex justify-center">
      <div className="container bg-red-100 mt-4 mb-4">
        { pokemons.results?.map((pokemon, index) => {
          return (
            <PokemonCard key={ index } pokemonId={ index + 1 } name={ pokemon.name } />
          )
        }) }
      </div>
    </div>
  )
}
