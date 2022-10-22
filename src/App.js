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
      <Route path="/search/:pokemonId" element={<PokemonDetails />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" exact element={<PokedexPage />} />
    </Routes>
  );

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <BrowserRouter>
      <div>
        <Layout>{routes}</Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
