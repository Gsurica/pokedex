import React from 'react';
import { useEffect } from "react";
import { fetchPokemonStats } from '../../features/Pokemon/pokemonSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const PokemonStats = () => {

  const { pokemonId } = useParams();
  const pokemonStats = useSelector(state => state.pokemon.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonStats(pokemonId));
  }, [])

  return (
    <div className="bg-red-400 rounded-lg shadow-lg">
      <div className="grid grid-cols-6 gap-2">
        { pokemonStats.map((stats) => {
          return (
            <div>
              <div className="flex justify-center text-white">
                <h1 className="p-3">| { stats.stat.name } |</h1>
              </div>
              <div className="text-black font-bold flex justify-center items-center">
                <h2 className="p-5">{ stats.base_stat }</h2>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}
