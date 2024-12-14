import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="font-extrabold text-3xl mb-8 border-b-4 pb-4">
          Pokemons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pokemons?.length > 0 &&
            pokemons.map((pokemon) => {
              return (
                <Link href={`/pokemon-list/${pokemon.id}`} key={pokemon.id}>
                  <Card key={pokemon.id}>
                    <CardContent>
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <h2 className="mt-4 font-bold text-xl">
                          {pokemon.pokemon}
                        </h2>
                        <img
                          src={pokemon.image_url}
                          className="w-full h-full"
                          alt={pokemon.pokemon}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
