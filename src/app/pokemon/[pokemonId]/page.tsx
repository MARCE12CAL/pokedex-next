import { SinglePokemon } from "@/components/single-pokemon";

type RouteParams = {
  params: Params;
};

type Params = {
  pokemonId: string;
};

export default function PokemonPage({ params }: RouteParams) {
  return (
    <div className="flex flex-col justify-center h-screen container">
      <SinglePokemon pokemonId={params.pokemonId} />
    </div>
  );
}
