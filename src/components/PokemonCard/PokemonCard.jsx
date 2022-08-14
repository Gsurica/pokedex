import React from 'react';
import pokeball from "../../pokeball.png";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchPokemonsDetails } from '../../features/Pokemon/pokemonSlice';

export const PokemonCard = ({ name, pokemonId }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl items-center px-4 py-8 bg-black mt-8 rounded-lg mb-8 hover:scale-100 hover:transition">
        <div className="font-bold tracking-widest uppercase px-3 py-8 bg-red-400 w-48 max-w-lg flex justify-center text-white">
          { name }
        </div>
        <div className="hover:animate-bounce cursor-pointer flex justify-center mt-6">
          <Link to={ `/pokemon/${pokemonId}` }>
            <img src={ pokeball } width="60" />
          </Link>
        </div>
      </div>
    </div>
  )
}
