import React from 'react';
import { PokemonMetaDetails } from '../PokemonMetaDetails/PokemonMetaDetails';
import { PokemonTypes } from '../PokemonTypes/PokemonTypes';
import { PokemonStats } from '../PokemonStats/PokemonStats';
import { PokemonMoves } from '../PokemonMoves/PokemonMoves';

export const PokemonDetails = () => {
  return (
    <div className="w-full flex justify-center flex-col">
      <PokemonMetaDetails />
      <div className="w-full flex justify-around items-center mb-5">
        <PokemonTypes />
        <PokemonStats />
      </div>
      <PokemonMoves />
    </div>
  )
}
