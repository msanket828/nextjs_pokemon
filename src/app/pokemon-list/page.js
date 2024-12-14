import PokemonList from "@/components/pokemon-list";
import React from "react";

const fetchPokemons = async () => {
  try {
    let pokemons = await fetch(`https://dummyapi.online/api/pokemon`);
    pokemons = await pokemons.json();
    return pokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};
const Pokemons = async () => {
  const pokemons = await fetchPokemons();
  return <PokemonList pokemons={pokemons} />;
};

export default Pokemons;
