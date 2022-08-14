import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonsDetails, fetchPokemonImages, fetchPokemonAbilities } from '../../features/Pokemon/pokemonSlice';

export const PokemonMetaDetails = () => {

  const { pokemonId } = useParams();
  const pokemon = useSelector(state => state.pokemon.pokemonsDetails);
  const pokemonImage = useSelector(state => state.pokemon.sprite);
  const pokemonAbilities = useSelector(state => state.pokemon.abilities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsDetails(pokemonId));
    dispatch(fetchPokemonImages(pokemonId));
    dispatch(fetchPokemonAbilities(pokemonId));
  }, [dispatch]);

  return (
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
  )
}
