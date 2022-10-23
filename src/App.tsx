import './App.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage/PokedexPage';
import PokemonSearch from './pages/PokemonSearch/PokemonSearch';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import Layout from './components/Layout/Layout';
import { SimplePokemon } from './models/simplepokemon.model';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  const [pokedex, setPokedex] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=800')
      .then((res) => {
        console.log(res);
        console.log(res.data.results);

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

        console.log(alteredPokemons);

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
    <BrowserRouter>
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
