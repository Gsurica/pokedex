import React, { useEffect } from 'react';
import { PokemonListing } from "../PokemonListing/PokemonListing";
import { fetchPokemons } from '../../features/Pokemon/pokemonSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
    console.log(pokemons);
  }, [dispatch])

  return (
    <>
      <PokemonListing />
    </>
  )
}
