import './App.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage/PokedexPage';
import PokemonSearch from './pages/PokemonSearch/PokemonSearch';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import Layout from './components/Layout/Layout';
// import { connect } from 'react-redux';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  let routes = (
    <Routes>
      <Route path="/search" element={<PokemonSearch />} />
      <Route path="/pokedex/:pokemonId" element={<PokemonDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" exact element={<PokedexPage />} />
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
