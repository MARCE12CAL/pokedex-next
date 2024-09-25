"use client";
import { useEffect, useState } from "react";
import { PokemonCard } from "@/components/pokemon-card";

type Pokemon = {
  name: string;
  url: string;
};

export function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  //   const [number, setNumber] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20").then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setPokemons(data.results);
          // No hacer
          // setNumber(number + 1);
        })
    );
    setTimeout((res) => {
      setLoading(false);
    }, 5000);
  }, []); // [number]

  return (
    <>
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="grid grid-cols-12 gap-4 mt-8">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      )}
    </>
  );
}
