import React from 'react';
import { useEffect } from "react";
import { fetchPokemonMoves } from '../../features/Pokemon/pokemonSlice';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const PokemonMoves = () => {

  const { pokemonId } = useParams();
  const pokemonMoves = useSelector(state => state.pokemon.moves);
  const dispatch = useDispatch();

  useEffect(() => {;
    dispatch(fetchPokemonMoves(pokemonId));
  }, [dispatch, pokemonId]);

  return (
    <>
      <div className="flex justify-center">
        <span className="px-4 py-6 bg-red-300 rounded-lg text-white">Moves!</span>
      </div>
      <div className="flex justify-center m-6 flex-col p-10 border border-red-500 rounded-lg max-h-60">
          <div className="flex flex-col overflow-auto">
            { pokemonMoves.map(move => {
              return (
                <span className="px-2 py-6 border border-red-100 font-bold tracking-widest mt-5 hover:bg-red-400 hover:text-white cursor-pointer">{ move.move.name }</span>
              )
            }) }
          </div>
      </div>
    </>
  )
}
