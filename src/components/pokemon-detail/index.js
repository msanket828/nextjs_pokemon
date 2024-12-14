import Link from "next/link";
import React from "react";

const PokemonDetail = ({ pokemon }) => {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <Link href={"/pokemon-list"} className="font-bold">
        Back
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <img
          src={pokemon.image_url}
          alt={pokemon.pokemon}
          className="w-[300px] h-[300px] object-cover"
        />
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Name: {pokemon.pokemon}</h2>
          <h3 className="text-xl font-bold mb-4">Type: {pokemon.type}</h3>
          <h3 className="text-xl font-bold mb-4">
            Superpowers: {pokemon.abilities.join(",")}
          </h3>
          {pokemon.evolutions.length > 0 && (
            <p className="text-xl font-bold mb-4">
              Evolutions: {pokemon.evolutions.join(" | ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
