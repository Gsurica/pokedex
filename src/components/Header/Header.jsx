import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="w-full grid grid-cols-3 gap-4 bg-zinc-200 py-6">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-2xl tracking-widest px-6 py-4 bg-slate-300 rounded-md hover:bg-slate-500 hover:text-white hover:cursor-pointer">
            Poke<span className="text-red-400 hover:cursor-pointer">dex</span>
          </h1>
          <p className="mt-4 font-bold tracking-widest hover:text-white cursor-pointer">We all love pokemons!</p>
        </div>
        <div className="flex justify-center items-center px-6 py-4 bg-red-500 rounded-xl text-white text-5xl tracking-widest flex-col">
          <Link to="/home">Pokedex</Link>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-bold tracking-widest uppercase">made by Gsurica</span>
        </div>
      </div>
      <div className="px-4 py-8 bg-black rounded-bl-lg rounded-br-lg">
        <input className="p-2 px-3" placeholder="Search Pokemon!" />
        <button className="text-white text-center px-4 bg-red-500 p-2 rounded-tr-lg rounded-br-lg uppercase tracking-wider">Search</button>
      </div>
    </div>
  )
}
