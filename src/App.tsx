///REACT
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

///AXIOS
import axios, { AxiosError, AxiosResponse } from 'axios';

///COMPONENTS
import Layout from './components/hocs/Layout/Layout';
import ScrollToTop from './components/Utility/ScrollToTop/ScrollToTop';
import PokedexPage from './pages/PokedexPage/PokedexPage';
import PokemonSearch from './pages/PokemonSearch/PokemonSearch';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

///MODELS
import { SimplePokemon } from './models/simplepokemon.model';

function App() {
  // Defines pokemon list
  const [pokedex, setPokedex] = useState<SimplePokemon[]>([]);
  // Sets loading state of pokemon list
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //  Sets error state of pokemon list load process
  const [isError, setIsError] = useState<boolean>(false);
  //  Sets error message of the pokemon list load process (if present)
  const [errorMessage, setErrorMessage] = useState<string>('');
  

  useEffect(() => {
    // 800 pokemon is quite a lot, so adjust to lower numbers for mobile devices
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=800')
      .then((res: AxiosResponse) => {
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
        setIsLoading(false);
      })
      .catch((err: AxiosError | Error) => {
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      });
  }, []);

  let routes = (
    <Routes>
      <Route
        path="/search"
        element={
          <PokemonSearch
            pokedex={pokedex}
            isLoading={isLoading}
            isError={isError}
            errorMessage={errorMessage}
          />
        }
      />
      {/* 
// @ts-ignore */}
      <Route path="/pokedex/:pokemonId" element={<PokemonDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route
        path="/"
        element={
          <PokedexPage
            pokedex={pokedex}
            isLoading={isLoading}
            isError={isError}
            errorMessage={errorMessage}
          />
        }
      />
    </Routes>
  );

  return (
    <BrowserRouter basename="/ReactDex">
      <ScrollToTop />
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
