import PokemonDetail from "@/components/pokemon-detail";
import React from "react";

const fetchPokemDetail = async (id) => {
  let response = await fetch(`https://dummyapi.online/api/pokemon/${id}`);
  response = await response.json();
  return response;
};

const Pokmeon = async ({ params }) => {
  const { details } = await params;
  const pokemon = await fetchPokemDetail(details);

  return <PokemonDetail pokemon={pokemon} />;
};

export default Pokmeon;
