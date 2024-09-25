import { Heading } from "@/components/heading";
import { PokemonList } from "@/components/pokemon-list";

export default function Home() {
  return (
    <div className="container py-8">
      <Heading />
      <PokemonList />
    </div>
  );
}
