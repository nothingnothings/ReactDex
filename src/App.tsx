///REACT
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

///AXIOS
import axios from 'axios';

///COMPONENTS
import Layout from './components/Layout/Layout';
import PokedexPage from './pages/PokedexPage/PokedexPage';
import PokemonSearch from './pages/PokemonSearch/PokemonSearch';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

///MODELS
import { SimplePokemon } from './models/simplepokemon.model';

function App() {
  const [pokedex, setPokedex] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=800')
      .then((res) => {
        return res.data.results;
      })
      .then((pokemons: SimplePokemon[]) => {
        const alteredPokemons = pokemons.map((pokemon, index) => {
          return {
            id: index + 1,
            url: pokemon.url,
            name: pokemon.name,
          };
        });

        setPokedex(alteredPokemons);
      });
  }, []);

  let routes = (
    <Routes>
      <Route path="/search" element={<PokemonSearch pokedex={pokedex} />} />
      {/* 
// @ts-ignore */}
      <Route path="/pokedex/:pokemonId" element={<PokemonDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" element={<PokedexPage pokedex={pokedex} />} />
    </Routes>
  );

  return (
    <BrowserRouter basename="/pokemonapi">
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
