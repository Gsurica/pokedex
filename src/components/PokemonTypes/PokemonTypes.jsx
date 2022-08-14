import React from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonTypes } from '../../features/Pokemon/pokemonSlice';

export const PokemonTypes = () => {

  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const pokemonTypes = useSelector(state => state.pokemon.types);

  useEffect(() => {
    dispatch(fetchPokemonTypes(pokemonId));
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold tracking-widest uppercase p-3 bg-red-100 rounded-lg">Types</h1>
      </div>
      <div className="flex">
        { pokemonTypes.map(({ type }) => {
          return (
            <span className="p-4 bg-red-200 mt-4 rounded-lg mr-2 text-white font-bold uppercase">{ type.name }</span>
          )
        }) }
      </div>
    </div>
  )
}
