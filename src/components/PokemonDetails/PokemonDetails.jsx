import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsDetails, fetchPokemonImages, fetchPokemonAbilities, fetchPokemonTypes, fetchPokemonStats, fetchPokemonMoves } from '../../features/Pokemon/pokemonSlice';

export const PokemonDetails = () => {

  const { pokemonId } = useParams();
  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokemon.pokemonsDetails);
  const pokemonImage = useSelector(state => state.pokemon.sprite);
  const pokemonAbilities = useSelector(state => state.pokemon.abilities);
  const pokemonTypes = useSelector(state => state.pokemon.types);
  const pokemonStats = useSelector(state => state.pokemon.stats);
  const pokemonMoves = useSelector(state => state.pokemon.moves);

  useEffect(() => {
    dispatch(fetchPokemonsDetails(pokemonId));
    dispatch(fetchPokemonImages(pokemonId));
    dispatch(fetchPokemonAbilities(pokemonId));
    dispatch(fetchPokemonTypes(pokemonId));
    dispatch(fetchPokemonStats(pokemonId));
    dispatch(fetchPokemonMoves(pokemonId));
  }, [dispatch, pokemonId]);

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="container bg-red-100 flex justify-around mt-8 mb-8 p-6 rounded-tr-2xl rounded-br-2xl shadow-lg">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl text-black tracling-widest px-4 py-6 bg-white uppercase italic rounded-lg">{ pokemon.name }</h1>
          </div>
          <div className="w-auto flex justify-center mt-6">
            <img className="p-6 bg-white rounded-lg" src={ pokemonImage } alt={ pokemon.name } width="200" />
          </div>
        </div>
        <div className="bg-white font-bold h-auto p-10 rounded-lg shadow-lg">
          <h2 className="tracking-wider bg-red-200 p-2 rounded-lg italic">Abilities!</h2>
          <div className="mt-6 flex-col flex">
            { pokemonAbilities.map((pokemonAb, index) => {
              return (
                <span className="mt-6 p-2 bg-black rounded-ld text-white font-bold tracking-wide" key={ index }>{ pokemonAb.ability.name }</span>
              )
            }) }
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around items-center mb-5">
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
      </div>
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
    </div>
  )
}
